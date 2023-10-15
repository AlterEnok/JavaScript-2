const singleUseButton = document.querySelector('.single-use-btn');
function handleClick() {
  console.log('clicked');
  singleUseButton.removeEventListener('click', handleClick);
}

singleUseButton.addEventListener('click', handleClick);
