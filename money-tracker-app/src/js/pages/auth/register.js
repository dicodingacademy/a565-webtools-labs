import Auth from '../../network/auth';

const Register = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.register({
          email: formData.email,
          password: formData.password,
        });

        await Auth.updateProfile(response.user, {
          displayName: formData.name,
        });
        window.alert('Registered a new user');
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const username = document.querySelector('#validationCustomUsername');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
};

export default Register;
