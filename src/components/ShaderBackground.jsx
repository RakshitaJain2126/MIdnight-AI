import React, { useEffect, useRef } from 'react';

export default function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
          
          float t = u_time * 0.15;
          
          // Create technical developer grids
          vec2 grid = fract(uv * 32.0 + 0.15 * sin(t + uv.yx * 2.5));
          float line = smoothstep(0.015, 0.0, abs(grid.x - 0.5)) + smoothstep(0.015, 0.0, abs(grid.y - 0.5));
          
          // Complex auroral stream waves
          float noise = 0.0;
          for(float i = 1.0; i < 4.0; i++) {
              noise += sin(p.x * i * 1.8 + t + sin(p.y * i * 1.2 + t)) * 0.45;
          }
          
          // Predefined color palette overrides
          vec3 colorTeal = vec3(0.067, 0.298, 0.353);   // Nocturnal Expedition (#114C5A)
          vec3 colorOrange = vec3(1.0, 0.600, 0.196);   // Deep Saffron (#FF9932)
          vec3 colorGold = vec3(1.0, 0.784, 0.004);     // Forsythia (#FFC801)
          vec3 bgMidnight = vec3(0.02, 0.03, 0.04);     // Custom deep dark canvas
          
          vec3 finalColor = mix(bgMidnight, colorTeal, clamp(noise * 0.38, 0.0, 1.0));
          finalColor = mix(finalColor, colorOrange, clamp(sin(p.y * 1.8 + t * 0.8) * 0.22, 0.0, 1.0));
          
          // Add neon glowing grid lines
          finalColor += line * 0.045 * colorGold;
          
          // Interactivity: mouse hover grid disturbance
          float distToMouse = length(p - (u_mouse.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y));
          float hoverGlow = smoothstep(0.4, 0.0, distToMouse);
          finalColor += hoverGlow * 0.15 * colorGold;
          
          // Soft radial vignette
          float vig = 1.0 - smoothstep(0.3, 1.65, length(p));
          finalColor *= vig;
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(s));
      }
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Shader linking error:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full"></canvas>;
}
