import Axios, { AxiosInstance } from 'axios'
import env from '../env.json'

const api:AxiosInstance = Axios.create({
    baseURL: env.BACKEND_URL,
})


export const authorizaton =  {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
}


export default api