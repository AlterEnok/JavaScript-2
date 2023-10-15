const searchButton = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  console.log(searchText);
});
