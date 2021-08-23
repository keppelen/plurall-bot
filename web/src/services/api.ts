import Axios, { AxiosInstance } from 'axios'

const api:AxiosInstance = Axios.create({
    baseURL: 'http://localhost:4000/api',
})


export const authorizaton =  {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
}


export default api