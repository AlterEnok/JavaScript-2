const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', (event) => {
  const inputValue = event.target.value;
  console.log(inputValue);
});
