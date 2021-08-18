import axios, { AxiosRequestConfig } from "axios"
import { config } from "../config/config"
import { SaveAnswer } from "../data/save-answer"
import { Timeout } from "../tools/timeout"
import { IBook } from "./books"
import { IQuestion } from "./questions"

const token = config.Token
const delay = 1000 * config.DelayMultiplier //ms

export async function GuessAnswer(question:IQuestion,groupid:number, answer:string, book:IBook){
    console.log(`                   ✏️ 'Chutando' ${answer}`)
    
    await Timeout(delay) // purposeful delay 

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
        const response = await axios.post(`https://api.plurall.net/api/task_workflows/${groupid}/subtasks/${question.id}/answer`,body,config)
        
        const status = response.data.data.update_interface_data.status
        const correct = status === 'correct' ? true : false

        const officialAnswer = response.data.data.update_interface_data.official_answer

        if(correct)
            console.log('                   ✅ Resposta correta')
        else
            console.log('                   🅾️ Resposta incorreta')

        if(officialAnswer)
            SaveAnswer(question,groupid,officialAnswer, book)

        return correct
    }catch{
        console.log('⚠️ Ocorreu um erro ao chutar questão')
        return null
    }

}
