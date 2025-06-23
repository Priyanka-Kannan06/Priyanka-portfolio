import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const boxes = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 10,
      dx: -1 + Math.random() * 2,
      dy: -1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      boxes.forEach((box) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(229, 9, 20, ${box.opacity})`; // metallic red
        ctx.fillRect(box.x, box.y, box.size, box.size);

        box.x += box.dx;
        box.y += box.dy;

        if (box.x < 0 || box.x > width) box.dx *= -1;
        if (box.y < 0 || box.y > height) box.dy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: '#000',
      }}
    />
  );
};

export default CanvasBackground;
