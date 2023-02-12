import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register({ name, username, email, password }) {
    return await axios.post(ApiEndpoint.REGISTER, { name, username, email, password });
  },

  async login({ email, password }) {
    return await axios.post(ApiEndpoint.LOGIN, { email, password });
  },
};

export default Auth;
