const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  console.log(isChecked);
});
