// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the card element
  const card = document.getElementById('flip-card');

  // Add a click event to toggle the 'flipped' class
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
