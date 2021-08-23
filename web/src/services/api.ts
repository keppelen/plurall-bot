import Axios, { AxiosInstance } from 'axios'

const api:AxiosInstance = Axios.create({
    baseURL: 'http://localhost:4000/api',
})


export const authorizaton = (token:string|null) => {
    return {
        headers: {
        'Authorization': `Bearer ${token}` 
        }
    }
}

export default api