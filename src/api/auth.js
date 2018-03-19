import axios from 'axios';

export default {
  auth: (data) => axios.post('/api/auth/login', {data}).then(res => res.data),
  confirmToken: () => axios.get('/api/auth/confirm_token').then(res => res.data)
}