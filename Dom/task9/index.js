function finishForm() {
  const loginForm = document.querySelector('.login-form');

  const loginInput = document.createElement('input');
  loginInput.setAttribute('type', 'text');
  loginInput.setAttribute('name', 'login');
  loginInput.prepend(loginInput);

  const passwordInput = loginForm.querySelector('input[name="password"]');
  if (passwordInput) {
    passwordInput.setAttribute('type, password');
  }
}
finishForm();
