import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-1dcf0.firebaseio.com/'
});

export default instance;