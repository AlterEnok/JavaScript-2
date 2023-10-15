const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  const pageNumber = event.target.dataset.pageNumber;
  console.log(pageNumber);
};

buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
