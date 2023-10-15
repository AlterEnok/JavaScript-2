function handleClick(event) {
  const buttonText = event.target.textContent;
  console.log(buttonText);
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
