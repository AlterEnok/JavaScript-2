export function setTitle(text) {
  const titleElem = document.querySelector('.title');
  if (titleElem) {
    titleElem.textContent = text;
  }
}
setTitle('Hello, World!');
