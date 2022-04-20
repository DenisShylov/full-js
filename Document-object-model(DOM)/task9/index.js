const finishForm = () => {
  const form = document.querySelector('.login-form');
  const input = document.querySelector('input');
  input.setAttribute('type', 'password');

  const create = document.createElement('input');
  create.setAttribute('type', 'text');
  create.setAttribute('name', 'login');
  form.prepend(create);
};
// finishForm();
export { finishForm };
