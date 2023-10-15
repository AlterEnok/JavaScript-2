export function finishList() {
  const list = document.querySelector('.list');

  const firstListItem = document.createElement('li');
  firstListItem.textContent = '1';
  list.prepend(firstListItem);

  const fourthListItem = document.createElement('li');
  fourthListItem.textContent = '4';
  list.children[2].after(fourthListItem);

  const sixthListItem = document.createElement('li');
  sixthListItem.textContent = '6';
  list.children[5].before(sixthListItem);

  const eighthListItem = document.createElement('li');
  eighthListItem.textContent = '8';
  list.append(eighthListItem);
}
