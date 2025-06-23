// src/utils/confetti.js
import confetti from 'canvas-confetti';

export const launchConfetti = () => {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    scalar: 1.2,
  });
};
