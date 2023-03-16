import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'da91dad52c8647acac4406199617da44'
    }
})