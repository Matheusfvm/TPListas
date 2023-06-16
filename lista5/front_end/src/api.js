import api from 'axios'

api.defaults.baseURL = 'http://localhost:8000';
api.defaults.headers.common['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';

module.exports(api)