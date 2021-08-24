import api, { authorizaton } from "../../services/api"


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

export async function GetQuestionGroup(taskid:string){
    console.log(`       🔍 Pegando as perguntas do tarefa...`)

    try{
        const {data} = await api.get(`/questions/list/${taskid}`, authorizaton)
        return data
    }catch{
        console.log('⚠️ Ocorreu um erro ao pergar as perguntas ta tarefa')
        return []
    }
}