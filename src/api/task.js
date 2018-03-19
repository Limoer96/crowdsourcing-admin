import axios from 'axios';

export default {
  addTask: (data) => axios.post('/api/task/addone', {data})
}
