export function createButton(buttonText) {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.body.append(button);
}
createButton('Send email');
