const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  if (value === 'y') {
    result.textContent = 'You are correct!';
    result.style.color = 'green';
  } else {
    result.textContent = 'You are wrong!';
    result.style.color = 'red';
  }
});
