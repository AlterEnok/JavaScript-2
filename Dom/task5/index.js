export function setButton(buttonText) {
  const bodyElem = document.querySelector('body');
  if (bodyElem) {
    bodyElem.innerHTML = `<button>${buttonText}</button>`;
  }
}

setButton('Click me!');

// Second code with textContent
// export function setButton(buttonText) {
//   const bodyElem = document.querySelector('body');
//   if (bodyElem) {
//     bodyElem.textContent = `button${buttonText}/button`;
//   }
// }
