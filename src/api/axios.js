import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500',
    liveURL: 'https://reacttutoapi-1.onrender.com/api/v1/'
});


