import axios, { AxiosRequestConfig } from "axios"
import { SaveAnswer } from "../controllers/answer-controller"

export async function GuessAnswer(bookid:string, groupid:string, questionid:string, answer:string, token:string, email:string){

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Host': 'api.plurall.net',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Content-Length': '14',
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

    const body = {
        answer,
    }

    try{
        const response = await axios.post(`https://api.plurall.net/api/task_workflows/${groupid}/subtasks/${questionid}/answer`,body,config)
        
        const status = response.data.data.update_interface_data.status
        const correct = status === 'correct' ? true : false

        const officialAnswer = response.data.data.update_interface_data.official_answer

        if(officialAnswer)
            SaveAnswer(bookid, groupid, questionid, officialAnswer, email)

        return correct
    }catch{
        console.log('⚠️ Ocorreu um erro ao chutar questão')
        return null
    }

}
