import React, { useEffect, useState, useRef } from 'react';

export default function SakuraCursor({ enabled = true }) {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const petalsContainerRef = useRef(null);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop/laptops with fine pointers
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled || !isPointerDevice) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId;
    let lastPetalTime = 0;

    const petals = [];
    const maxPetals = 22;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering clickable elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable'))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }

      // Spawn trailing petal particle occasionally
      const now = performance.now();
      if (now - lastPetalTime > 55) {
        lastPetalTime = now;
        spawnPetal(mouseX, mouseY, false);
      }
    };

    const handleClick = (e) => {
      // Spawn burst of 5-7 petals on click
      for (let i = 0; i < 6; i++) {
        spawnPetal(e.clientX, e.clientY, true);
      }
    };

    const spawnPetal = (x, y, isBurst = false) => {
      if (!petalsContainerRef.current) return;

      const petal = document.createElement('div');
      petal.className = 'sakura-trail-petal';
      
      const size = isBurst ? 10 + Math.random() * 8 : 8 + Math.random() * 6;
      const angle = isBurst ? Math.random() * 360 : -30 + Math.random() * 60;
      const speed = isBurst ? 2 + Math.random() * 4 : 0.8 + Math.random() * 1.5;
      const rad = (angle * Math.PI) / 180;
      const vx = Math.cos(rad) * speed;
      const vy = isBurst ? Math.sin(rad) * speed : 1.2 + Math.random() * 1.5;
      const rot = Math.random() * 360;
      const rotSpeed = (Math.random() - 0.5) * 8;
      const colors = ['#fbcfe8', '#f9a8d4', '#f472b6', '#fda4af', '#fecdd3'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      petal.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size * 1.3}px;
        background: radial-gradient(circle at 40% 30%, #fff 0%, ${color} 70%);
        border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.85;
        box-shadow: 0 0 6px rgba(244, 114, 182, 0.4);
        transform: translate(-50%, -50%) rotate(${rot}deg);
        will-change: transform, opacity;
        transition: opacity 0.6s ease-out;
      `;

      petalsContainerRef.current.appendChild(petal);

      petals.push({
        element: petal,
        x,
        y,
        vx,
        vy,
        rot,
        rotSpeed,
        opacity: 0.85,
        life: 1.0,
        decay: isBurst ? 0.025 : 0.035,
      });

      if (petals.length > maxPetals) {
        const oldest = petals.shift();
        if (oldest && oldest.element.parentNode) {
          oldest.element.remove();
        }
      }
    };

    const renderLoop = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Update trailing petals
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;
        p.life -= p.decay;
        p.opacity = Math.max(0, p.life * 0.85);

        if (p.life <= 0) {
          if (p.element.parentNode) {
            p.element.remove();
          }
          petals.splice(i, 1);
        } else {
          p.element.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) rotate(${p.rot}deg) scale(${p.life})`;
          p.element.style.opacity = p.opacity;
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      petals.forEach((p) => {
        if (p.element.parentNode) p.element.remove();
      });
    };
  }, [enabled, isPointerDevice]);

  if (!enabled || !isPointerDevice) return null;

  return (
    <>
      {/* Floating Petals Particle Layer */}
      <div ref={petalsContainerRef} className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" />

      {/* Main Blossom Center Point */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-transform duration-150 ${
            isHoveringClickable ? 'scale-125' : 'scale-100'
          }`}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-sakura-400 to-sakura-300 shadow-[0_0_10px_rgba(240,101,149,0.8)] border border-white" />
        </div>
      </div>

      {/* Smooth Trailing Sakura Ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`rounded-full border transition-all duration-200 flex items-center justify-center ${
            isHoveringClickable
              ? 'w-10 h-10 border-sakura-500 bg-sakura-200/25 scale-110'
              : 'w-7 h-7 border-sakura-300/80 bg-sakura-100/15'
          } shadow-[0_0_15px_rgba(244,114,182,0.3)]`}
        >
          {isHoveringClickable && (
            <span className="text-[10px] select-none opacity-80">🌸</span>
          )}
        </div>
      </div>
    </>
  );
}
