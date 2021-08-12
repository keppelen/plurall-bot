import axios, { AxiosRequestConfig } from "axios";
import { IQuestion } from "./questions";

const token = process.env.TOKEN
const delay = 1000 //ms

export async function ReadAnswer(question:IQuestion,groupid:number){
    console.log('                   📜"Lendo" as parada')


    if(question.status !== null) return

    await timeout(delay) // purposeful delay 

    console.log(question)

    const config:AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Host': 'api.plurall.net',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Referer': 'https://atividades.plurall.net/',
            // 'Cookie': '_ga=GA1.1.1282189012.1628703542; _gid=GA1.2.722263243.1628703542; _hjid=549775f0-7877-46d6-a4d3-f36bdeacc64b; _pid=PLTR.c89da11c-847f-4b0a-b0f4-6e7b670351a4.1628703542119; _ga_YNR3Q2V0Q4=GS1.1.1628809636.10.1.1628809719.0; SID=ijtd61ndp8ton0n1hltbk7cfu5; _hjAbsoluteSessionInProgress=1; shared_cookie=1bcd8eb7a5af4842521056b38a038cf6; show_onboarding=ImNsb3NlZCI=; _gat=1'
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'iframe',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-site',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
        }
    }

    await axios.get(`https://api.plurall.net/api/task_workflows/${groupid}/subtasks/${question.id}`,config)
}

function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
