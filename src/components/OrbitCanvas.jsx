import { useEffect, useRef } from 'react';

const CODE_SYMBOLS = [
  '< />', '{ }', '=>', '()', '[ ]', 'fn', 'AI', 'ML',
  '∑', 'λ', '∞', '01', '⊕', 'py', 'SQL', 'API'
];

export default function OrbitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;
    
    // Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left - W / 2;
      targetMouseY = e.clientY - rect.top - H / 2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // ── Particles ──────────────────────────────────────────────
    const particles = [];
    const PARTICLE_COUNT = 160;
    const ORBIT_COUNT    = 4;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() { this.reset(true); }
      reset(initial = false) {
        const orbit  = Math.floor(Math.random() * ORBIT_COUNT) + 1;
        this.radius  = orbit * (Math.min(W, H) * 0.12) + (Math.random() - 0.5) * 40; // fuzziness
        this.angle   = Math.random() * Math.PI * 2;
        this.speed   = (0.001 + Math.random() * 0.0025) * (Math.random() < 0.5 ? 1 : -1);
        this.tilt    = (Math.random() - 0.5) * 0.9;
        this.size    = Math.random() * 2.5 + 0.5;
        this.opacity = initial ? Math.random() : 0;
        this.targetOpacity = 0.4 + Math.random() * 0.6;
        this.life    = initial ? Math.random() * 400 : 0;
        this.maxLife = 200 + Math.random() * 400;
        // Mix of cyan and purple for tech vibe
        const hue = Math.random() > 0.5 ? 220 + Math.random() * 30 : 270 + Math.random() * 40;
        this.color   = `hsl(${hue}, 90%, 65%)`;
        this.x = 0;
        this.y = 0;
        this.isLabel = false;
      }
      update(cx, cy) {
        this.angle += this.speed;
        this.life++;
        const t = this.life / this.maxLife;
        this.opacity = t < 0.1 ? t * 10 * this.targetOpacity
                    : t > 0.85 ? (1 - t) / 0.15 * this.targetOpacity
                    : this.targetOpacity;
        if (this.life >= this.maxLife) this.reset();

        const orbitX = Math.cos(this.angle) * this.radius;
        const orbitY = Math.sin(this.angle) * this.radius * Math.cos(this.tilt);
        
        // Parallax effect
        const parallaxX = mouseX * 0.06 * (this.radius / (W/2 || 1));
        const parallaxY = mouseY * 0.06 * (this.radius / (H/2 || 1));

        this.x = cx + orbitX + parallaxX;
        this.y = cy + orbitY + parallaxY;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle   = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur  = 12;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class CodeLabel extends Particle {
      reset(initial = false) {
        super.reset(initial);
        this.text = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
        this.fontSize = 12 + Math.random() * 8;
        this.color = `hsl(${260 + Math.random() * 80}, 80%, 75%)`;
        this.isLabel = true;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha   = this.opacity * 0.9;
        ctx.fillStyle     = this.color;
        ctx.font          = `bold ${this.fontSize}px 'JetBrains Mono', 'Courier New', monospace`;
        ctx.shadowColor   = this.color;
        ctx.shadowBlur    = 15;
        ctx.textAlign     = 'center';
        ctx.textBaseline  = 'middle';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    function init() {
      resize();
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
      for (let i = 0; i < 15; i++) particles.push(new CodeLabel());
    }

    let coreGlow = 0;
    function drawCore(cx, cy) {
      coreGlow += 0.02;
      const pulse = 1 + Math.sin(coreGlow) * 0.2;

      const parallaxX = mouseX * 0.02;
      const parallaxY = mouseY * 0.02;
      const coreX = cx + parallaxX;
      const coreY = cy + parallaxY;

      // Outer aura
      const aura = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 130 * pulse);
      aura.addColorStop(0,   'rgba(99,102,241,0.25)');
      aura.addColorStop(0.5, 'rgba(139,92,246,0.1)');
      aura.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(coreX, coreY, 130 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // Core bright dot
      const core = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 35 * pulse);
      core.addColorStop(0,   'rgba(255,255,255,0.95)');
      core.addColorStop(0.4, 'rgba(160,140,255,0.8)');
      core.addColorStop(1,   'rgba(99,102,241,0)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(coreX, coreY, 35 * pulse, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawOrbitRings(cx, cy) {
      for (let i = 1; i <= ORBIT_COUNT; i++) {
        const r = i * (Math.min(W, H) * 0.12);
        const parallaxX = mouseX * 0.01 * i;
        const parallaxY = mouseY * 0.01 * i;
        
        ctx.save();
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth   = 1.5;
        ctx.setLineDash([2, 10]);
        ctx.beginPath();
        ctx.ellipse(cx + parallaxX, cy + parallaxY, r, r * 0.45, Math.PI * 0.1 * i + coreGlow * 0.1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawConnections() {
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.isLabel) continue; 
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.isLabel) continue;
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const minDist = 90;
          
          if (distSq < minDist * minDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / minDist) * 0.5 * Math.min(p1.opacity, p2.opacity);
            if (alpha > 0.01) {
              ctx.strokeStyle = `rgba(160, 150, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      
      const cx = W / 2, cy = H / 2;
      
      drawOrbitRings(cx, cy);
      drawCore(cx, cy);
      
      // Update particles
      for (const p of particles) { p.update(cx, cy); }
      
      // Draw neural network connections
      drawConnections();
      
      // Draw particles on top
      for (const p of particles) { p.draw(); }
      
      animId = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);

    init();
    frame();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
