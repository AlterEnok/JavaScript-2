export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsNodeList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elementsNodeList);
  console.dir(elementsArray);
  return elementsArray;
}
