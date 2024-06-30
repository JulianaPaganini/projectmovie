import axios from 'axios'

const api = axios.create({

        baseURL:'https://api.themoviedb.org/3/',
        params: {
            api_key:'99d837d309591be885170462b757311d',
            language:'pt-BR',
            page: 1
        }
})

export default api