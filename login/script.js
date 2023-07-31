document.addEventListener('DOMContentLoaded', () => {
  // Flying Hearts Setup
  const flyingHearts = document.querySelector('.flying-hearts');
  const numHearts = 3;

  for (let i = 1; i <= numHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add(`heart${i}`);
    flyingHearts.appendChild(heart);
  }
});
