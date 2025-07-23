function shootConfettiFromSide(side) {
  confetti({
    particleCount: 100,
    angle: side === 'left' ? 60 : 120,  // angles pointing inward from sides
    spread: 60,
    origin: { x: side === 'left' ? 0 : 1, y: 0.5 }, // left: x=0, right: x=1, vertically centered
    gravity: 0.5,
    ticks: 200,
    scalar: 1.2,
  });
}

window.onload = () => {
  // Launch confetti from left and right simultaneously
  shootConfettiFromSide('left');
  shootConfettiFromSide('right');
};