import axios, { AxiosRequestConfig } from "axios";
import { GuessOpenAnswer } from "./guess-open-answer";
import { IQuestion } from "./questions";
import { ReadAnswer } from "./read-answer";

const token = process.env.TOKEN
const delay = 3000 //ms


export async function GuessMultipleChoice(question:IQuestion,groupid:number){
    let alternatives:string[] = ['a','b','c','d','e']

    for(let x = 0; x < 3; x++){
        const guess = alternatives[Random(0,alternatives.length-1)]

        const isCorrect = await GuessAnswer(question, groupid, guess)
        if(isCorrect) return

        alternatives = alternatives.filter(item => item !== guess)
    }
}

export async function GuessAnswer(question:IQuestion,groupid:number, answer:string){
    
    console.log(`                   ✏️ Chutando GRUPO: ${groupid} | QUEST: ${question.id} | ALT: ${answer}`)

    await timeout(delay) // purposeful delay 

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Host': 'api.plurall.net',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
            'Accept': 'application/json, text/plain, */*, vnd.plurall.api.v3+json',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'client': 'PLTR.c89da11c-847f-4b0a-b0f4-6e7b670351a4.1628703542119',
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

    const response = await axios.post(`https://api.plurall.net/api/task_workflows/${groupid}/subtasks/${question.id}/answer`,body,config)
    
    const status = response.data.data.update_interface_data.status
    const correct = status === 'correct' ? true : false

    const officialAnswer = response.data.data.update_interface_data.official_answer

    if(correct)
        console.log('                   ✅ Alternativa correta')
    else
        console.log('                   🅾️ Alternativa incorreta')

    if(officialAnswer)
        saveAnswer(question,groupid,officialAnswer)

    return correct
}


function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function saveAnswer(question:IQuestion,groupid:number, answer:string){
    console.log(`                   💾 Salvando alternativa correta.. (${answer})`)
}

function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}