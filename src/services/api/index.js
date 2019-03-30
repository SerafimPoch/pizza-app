import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pizza-tele.ga/api/v1'
});

export default {
  login: async userData => await api.post('user/login', userData),
  getStore: async () => await api.get('store/list'),
  userInfo: async () => await api.get('user/my_info'),
  createUser: async userData => await api.post('user/create', userData)
};
