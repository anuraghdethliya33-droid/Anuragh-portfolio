import React, { useEffect, useRef } from 'react';

export default function SakuraBackground({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalCount = Math.min(38, Math.floor(window.innerWidth / 35));
    const petals = [];

    // Realistic Sakura Petal Path generator
    const drawPetal = (ctx, x, y, size, angle, flip, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(flip, 1);

      ctx.beginPath();
      ctx.moveTo(0, -size);
      // Left curve
      ctx.bezierCurveTo(-size * 0.7, -size * 0.6, -size * 0.8, size * 0.3, 0, size);
      // Right curve
      ctx.bezierCurveTo(size * 0.8, size * 0.3, size * 0.7, -size * 0.6, 0, -size);

      // Gradient fill for realistic petal shading
      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, color.light);
      grad.addColorStop(1, color.dark);

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(244, 114, 182, 0.25)';
      ctx.shadowBlur = 4;
      ctx.fill();

      // Tiny inner petal vein line
      ctx.beginPath();
      ctx.moveTo(0, size * 0.6);
      ctx.lineTo(0, 0);
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.15)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.restore();
    };

    const petalPalettes = [
      { light: '#fed7e2', dark: '#f687b3' },
      { light: '#fce7f3', dark: '#f472b6' },
      { light: '#fdf2f8', dark: '#fb7185' },
      { light: '#ffe4e6', dark: '#fda4af' },
      { light: '#fff1f2', dark: '#f43f5e' },
    ];

    // Initialize petals
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: 9 + Math.random() * 8,
        speedY: 0.8 + Math.random() * 1.4,
        speedX: -0.4 + Math.random() * 0.8,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.025,
        flip: Math.sin(Math.random() * Math.PI),
        flipSpeed: 0.015 + Math.random() * 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.01 + Math.random() * 0.02,
        swayAmplitude: 0.8 + Math.random() * 1.5,
        color: petalPalettes[Math.floor(Math.random() * petalPalettes.length)],
        opacity: 0.65 + Math.random() * 0.3,
      });
    }

    let mouseWind = 0;
    const handleMouseMove = (e) => {
      const centerX = width / 2;
      mouseWind = ((e.clientX - centerX) / centerX) * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        p.swayPhase += p.swaySpeed;
        p.flip = Math.sin(p.swayPhase * 1.5);
        p.angle += p.angularSpeed;

        const currentWind = mouseWind + Math.sin(p.swayPhase) * p.swayAmplitude;
        p.x += p.speedX + currentWind;
        p.y += p.speedY;

        ctx.globalAlpha = p.opacity;
        drawPetal(ctx, p.x, p.y, p.size, p.angle, p.flip, p.color);

        // Respawn when falling below screen or drifting too far
        if (p.y > height + 25 || p.x < -30 || p.x > width + 30) {
          p.x = Math.random() * (width + 60) - 30;
          p.y = -25 - Math.random() * 40;
          p.speedY = 0.8 + Math.random() * 1.4;
          p.size = 9 + Math.random() * 8;
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full"
      style={{ opacity: 0.95 }}
    />
  );
}
