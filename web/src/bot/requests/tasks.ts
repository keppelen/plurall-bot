import api, { authorizaton } from '../../services/api'

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


async function GetTaskGroup(bookid:string){
    console.log("🔍 Pegando tarefas da apostila...")

    try{
        const response = await api.get(`/task/list/${bookid}`, authorizaton)
        const taskGroups:ITaskGroup[] = response.data
        console.log(taskGroups)
        return taskGroups
    }catch{
        return []
    }
}



export default GetTaskGroup