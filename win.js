const canvas = document.getElementById('confetti-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = window.confetti.create(canvas, { resize: true });

confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0 },
});
confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 1 },
});
