document.addEventListener(‘DOMContentLoaded’, () => {
  const newList = document.querySelectorAll(‘.card--nanodegree__title’);
  newList.forEach(function (eve) {
    const button = document.createElement('button');
    button.textContent = 'Add to Favorites';
    button.classList.add('button', 'button--primary');
    eve.appendChild(button);
  }
});
