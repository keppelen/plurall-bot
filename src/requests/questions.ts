import axios, { AxiosRequestConfig } from "axios"
import { ITask } from "./tasks"


const token = process.env.TOKEN

export interface IQuestion{
    id: string,
    title: string,
    url: string,
    api_url: null|string,
    status: string|null,
    task_type: string,
    send_answer_enabled: boolean,
    user_answer: string|null,
    status_in_words: string|null,
    user_message: null|string,
    question_url: null|string,
    answer_type: null|string
}

export interface IQuestionGroup{
    id: number,
    description: null|string,
    title: string,
    layout_type: string,
    subtasks: IQuestion[]
}

export async function GetQuestionGroup(task:ITask){
    console.log(`       🔍 Pegando as perguntas do tarefa...`)

    const config:AxiosRequestConfig = {
        headers: {
            'Host': 'api.plurall.net',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'client': 'PLTR.c89da11c-847f-4b0a-b0f4-6e7b670351a4.1628703542119',
            'Authorization': `Bearer ${token}`,
            'Origin': 'https://atividades.plurall.net',
            'Connection': 'keep-alive',
            'Referer': 'https://atividades.plurall.net/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
        }
    }
    

    const {data} = await axios.get(`https://api.plurall.net/api/task_workflows/${task.id}`,config)
    const questiongroupID:number = data.data.id
    
    const questiongroup:IQuestionGroup[] = data.data.subtask_groups

    questiongroup.forEach(element => { // add the group id inside the array, so we can use the value later 
        element.id = questiongroupID
    });

    return questiongroup

}