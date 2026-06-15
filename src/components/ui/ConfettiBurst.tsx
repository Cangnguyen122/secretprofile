import confetti from "canvas-confetti";

export function fireConfettiBurst() {
  const defaults = {
    particleCount: 34,
    spread: 58,
    scalar: 0.82,
    ticks: 150,
  };

  confetti({ ...defaults, origin: { x: 0.18, y: 0.72 }, angle: 55 });
  confetti({ ...defaults, origin: { x: 0.82, y: 0.72 }, angle: 125 });
  confetti({
    particleCount: 46,
    spread: 92,
    startVelocity: 30,
    origin: { x: 0.5, y: 0.52 },
  });
}
