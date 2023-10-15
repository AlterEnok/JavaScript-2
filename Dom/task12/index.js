export function getSection(num) {
  const spanElement = document.querySelector(`span[data-number="${num}"]`);

  if (spanElement) {
    const parentBox = spanElement.closest('.box');
    if (parentBox) {
      return parentBox.getAttribute('data-section');
    }
  }

  return null;
}
