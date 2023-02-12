import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Transactions = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_TRANSACTION, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async getById(id) {
    return await axios.get(ApiEndpoint.GET_BY_ID_TRANSACTION(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async store({ name, date, amount, type, description, evidence }) {
    const data = { name, date, amount, type, description, evidence };

    return await axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async update({ id, name, date, amount, type, description, evidence }) {
    const data = { name, date, amount, type, description, evidence };

    return await axios.put(ApiEndpoint.UPDATE_TRANSACTION(id), data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async destroy(id) {
    return await axios.delete(ApiEndpoint.DESTROY_TRANSACTION(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },
};

export default Transactions;
