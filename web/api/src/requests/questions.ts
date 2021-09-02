import axios, { AxiosRequestConfig } from "axios"
import { ITask } from "./tasks"

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

export async function GetQuestionGroup(taskid:string, token:string){

    const config:AxiosRequestConfig = {
        headers: {
            'Host': 'api.plurall.net',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
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
    
    try{
        const {data} = await axios.get(`https://api.plurall.net/api/task_workflows/${taskid}`,config)
        const questiongroupID:number = data.data.id
        
        const questiongroup:IQuestionGroup[] = data.data.subtask_groups

        questiongroup.forEach(element => { // add the group id inside the array, so we can use the value later 
            element.id = questiongroupID
        });

        return questiongroup
    }catch{
        return null
    }

}