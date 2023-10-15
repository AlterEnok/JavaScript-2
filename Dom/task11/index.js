export function squaredNumbers() {
  const numberElements = document.querySelectorAll('.number');

  numberElements.forEach((element) => {
    const originalNumber = parseInt(element.getAttribute('data-number'));
    const squaredNumbers = originalNumber ** 2;
    element.setAttribute('data-squared-number', squaredNumbers);
  });
}
