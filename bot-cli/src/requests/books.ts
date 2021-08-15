import axios, { AxiosRequestConfig } from 'axios'
import dotenv from 'dotenv'
import { config, UpdateToken } from '../config/config'
dotenv.config()

const token = config.Token

export interface IBook {
    id: string,
    value: string,
    thumbnail: string,
    access_status: string,
    status_in_words: string|null,
    available: boolean
}


async function GetBooks(){
    console.log("🔍 Pegando apostilas....")

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Host': 'api.plurall.net',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'client': 'PLTR.c89da11c-847f-4b0a-b0f4-6e7b670351a4.1628703542119',
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
    }catch(err){
        console.log("Ocorreu um erro ao buscar as apostilas...")
        await UpdateToken('', '')
        return null
    }
}



export default GetBooks