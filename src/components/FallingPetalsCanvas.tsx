import React, { useEffect, useRef } from 'react';

export type FlowerType = 'gold-petal' | 'red-petal' | 'jasmine' | 'blush-petal' | 'gold-stardust';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  type: FlowerType;
  opacity: number;
  swayOffset: number;
  swaySpeed: number;
}

interface FallingPetalsCanvasProps {
  density?: 'subtle' | 'normal' | 'rich';
  className?: string;
  enableInteraction?: boolean;
}

export const FallingPetalsCanvas: React.FC<FallingPetalsCanvasProps> = ({
  density = 'normal',
  className = 'pointer-events-none fixed inset-0 z-20',
  enableInteraction = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -100, y: -100, active: false });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const count = density === 'subtle' ? 30 : density === 'normal' ? 55 : 85;
    const types: FlowerType[] = ['gold-petal', 'red-petal', 'jasmine', 'blush-petal', 'gold-stardust'];

    const createPetal = (startY?: number): Petal => {
      const typeIndex = Math.floor(Math.random() * types.length);
      const chosenType = types[typeIndex];

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        size: chosenType === 'gold-stardust' 
          ? 3 + Math.random() * 4 
          : chosenType === 'jasmine' 
            ? 12 + Math.random() * 8 
            : 14 + Math.random() * 12,
        speedY: 0.8 + Math.random() * 1.6,
        speedX: -0.5 + Math.random() * 1.0,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.015 + Math.random() * 0.02,
        type: chosenType,
        opacity: 0.5 + Math.random() * 0.45,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.02,
      };
    };

    petalsRef.current = Array.from({ length: count }, () => createPetal());

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableInteraction) return;
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!enableInteraction || !e.touches[0]) return;
      mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Render helper for single petal shape
    const drawPetalShape = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size);
      c.bezierCurveTo(size * 0.8, -size * 0.8, size * 0.9, size * 0.4, 0, size);
      c.bezierCurveTo(-size * 0.9, size * 0.4, -size * 0.8, -size * 0.8, 0, -size);
      c.closePath();
    };

    // Render Jasmine (Melati) 5-petal royal flower
    const drawJasmine = (c: CanvasRenderingContext2D, size: number, opacity: number) => {
      c.save();
      c.fillStyle = `rgba(255, 253, 245, ${opacity * 0.95})`;
      c.shadowColor = 'rgba(255, 215, 0, 0.4)';
      c.shadowBlur = 4;

      const petalRadius = size * 0.5;
      for (let i = 0; i < 5; i++) {
        c.rotate((Math.PI * 2) / 5);
        c.beginPath();
        c.ellipse(0, petalRadius, petalRadius * 0.4, petalRadius * 0.7, 0, 0, Math.PI * 2);
        c.fill();
      }

      // Yellow/Gold center pistil
      c.beginPath();
      c.arc(0, 0, size * 0.18, 0, Math.PI * 2);
      c.fillStyle = `rgba(240, 195, 60, ${opacity})`;
      c.fill();

      c.restore();
    };

    // Render 4-point Gold Sparkle
    const drawGoldStardust = (c: CanvasRenderingContext2D, size: number, opacity: number) => {
      c.save();
      c.fillStyle = `rgba(255, 230, 130, ${opacity})`;
      c.shadowColor = 'rgba(255, 215, 0, 0.9)';
      c.shadowBlur = 8;

      c.beginPath();
      c.moveTo(0, -size * 1.5);
      c.quadraticCurveTo(0, 0, size * 1.5, 0);
      c.quadraticCurveTo(0, 0, 0, size * 1.5);
      c.quadraticCurveTo(0, 0, -size * 1.5, 0);
      c.quadraticCurveTo(0, 0, 0, -size * 1.5);
      c.fill();

      c.beginPath();
      c.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      c.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
      c.fill();

      c.restore();
    };

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      const petals = petalsRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Natural sway physics
        p.swayOffset += p.swaySpeed;
        const sway = Math.sin(p.swayOffset) * 0.8;
        p.x += p.speedX + sway;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Interaction: gentle dispersion away from cursor/touch
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 5;
            p.y += (dy / dist) * force * 4;
            p.rotation += force * 0.1;
          }
        }

        // Wrap around bottom
        if (p.y > height + 40) {
          petals[i] = createPetal(-20);
          continue;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        const scaleX = Math.cos(p.flip);
        ctx.scale(scaleX, 1);

        if (p.type === 'jasmine') {
          drawJasmine(ctx, p.size, p.opacity);
        } else if (p.type === 'gold-stardust') {
          drawGoldStardust(ctx, p.size, p.opacity);
        } else {
          // Petal shapes
          if (p.type === 'gold-petal') {
            const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
            grad.addColorStop(0, `rgba(255, 245, 190, ${p.opacity})`);
            grad.addColorStop(0.4, `rgba(218, 165, 32, ${p.opacity * 0.95})`);
            grad.addColorStop(0.8, `rgba(184, 134, 11, ${p.opacity * 0.9})`);
            grad.addColorStop(1, `rgba(255, 225, 120, ${p.opacity})`);
            ctx.fillStyle = grad;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
            ctx.shadowBlur = 5;
          } else if (p.type === 'red-petal') {
            const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
            grad.addColorStop(0, `rgba(220, 38, 38, ${p.opacity * 0.95})`);
            grad.addColorStop(0.5, `rgba(153, 27, 27, ${p.opacity})`);
            grad.addColorStop(1, `rgba(88, 12, 12, ${p.opacity * 0.9})`);
            ctx.fillStyle = grad;
            ctx.shadowColor = 'rgba(153, 27, 27, 0.4)';
            ctx.shadowBlur = 4;
          } else {
            // blush petal
            const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
            grad.addColorStop(0, `rgba(254, 205, 211, ${p.opacity * 0.9})`);
            grad.addColorStop(0.6, `rgba(244, 114, 182, ${p.opacity * 0.85})`);
            grad.addColorStop(1, `rgba(251, 146, 60, ${p.opacity * 0.7})`);
            ctx.fillStyle = grad;
          }

          drawPetalShape(ctx, p.size);
          ctx.fill();

          // Subtle center vein highlight
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.lineTo(0, p.size * 0.7);
          ctx.strokeStyle = p.type === 'gold-petal' 
            ? `rgba(255, 255, 230, ${p.opacity * 0.4})` 
            : `rgba(255, 255, 255, ${p.opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [density, enableInteraction]);

  return <canvas ref={canvasRef} className={className} />;
};
