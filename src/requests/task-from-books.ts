import axios, { AxiosRequestConfig } from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN


async function GetTasks(book:string){
    console.log("Pegando tarefas do livro x....")

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}` ,
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
            'If-None-Match': 'W/"edc5ad1decf055a00600b4e0050e3918"',
            'Cache-Control': 'max-age=0'
        }
    }
    
    try{
        const {data} = await axios.get(`https://api.plurall.net/api/task_workflows?node_group=${book}&page=1`,config)
        console.log(data)
    }catch(err){
        console.log("Ocorreu um erro ao buscar as apostilas...")
    }
}



export default GetTasks