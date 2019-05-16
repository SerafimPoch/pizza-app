import axios from 'axios';

const isServer = !process.browser;

const api = axios.create({
  baseURL: isServer ? 'http://localhost:3000/api/' : '/api/',
})

export default {
  getNinja: async () => (await api.get('ninjas')).data,
  login: async (data) => await api.post('ninjas', data).data,
  userInfo: async () => await api.get('user/my_info'),
  createUser: async userData => await api.post('user/create', userData)
};
