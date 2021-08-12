import axios, { AxiosRequestConfig } from 'axios'
import dotenv from 'dotenv'
import { IBook } from './books'
dotenv.config()

const token = process.env.TOKEN

interface ITaskProgress {
    correct: number,
    wrong: number, 
    total: number
}

export interface ITask {
    id: number,
    name: string,
    official_answer_in_words: null|string,
    progress: ITaskProgress,
    user_task_id: number,
    status_in_words: string,
    status: string,
    end_date: null|string
}

export interface ITaskGroup {
    title: string,
    subtitle: string,
    quick_answer: boolean,
    node_id: string,
    video: {
      title: string,
      url: string,
      thumbnail: string
    },
    end_date: null|string,
    finish_button: null|string,
    receipt_button: null|string,
    tasks: ITask[]
}


async function GetTaskGroup(book:IBook){
    console.log("🔍 Pegando tarefas da apostila...")

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
    
    const {data} = await axios.get(`https://api.plurall.net/api/task_workflows?node_group=${book.id}&page=1`,config)
    const taskGroups:ITaskGroup[] = data.data
    return taskGroups
}



export default GetTaskGroup