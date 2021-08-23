import axios, { AxiosRequestConfig } from 'axios'

export interface IBook {
    id: string,
    value: string,
    thumbnail: string,
    access_status: string,
    status_in_words: string|null,
    available: boolean
}


async function GetBooks(token:string){

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Host': 'api.plurall.net',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br', 
            'Origin': 'https://atividades.plurall.net',
            'Connection': 'keep-alive',
            'Referer': 'https://atividades.plurall.net/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    }
    
    try{
        const {data} = await axios.get(`https://api.plurall.net/api/filters/node_groups`,config)
        const books:IBook[] = data.data.values
        return books
    }catch{
        return null
    }
}



export default GetBooks