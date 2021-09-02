import axios, { AxiosRequestConfig } from 'axios'
import { IBook } from './books'

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


async function GetTaskGroup(bookid:string, token:string){

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}` ,
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
            'Cache-Control': 'max-age=0'
        }
    }
    
    try{
        const {data} = await axios.get(`https://api.plurall.net/api/task_workflows?only_available_todo=true&node_group=${bookid}&page=1`,config)
        const taskGroups:ITaskGroup[] = data.data
        return taskGroups
    }catch{
        return null
    }
}



export default GetTaskGroup