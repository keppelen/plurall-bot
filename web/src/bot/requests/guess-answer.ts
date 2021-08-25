import api, { authorizaton } from "../../services/api"
import { IQuestion } from "./questions"

export async function GuessAnswer(question:IQuestion,groupid:number, answer:string, bookid:string){
    console.log(`                   ✏️ 'Chutando' ${answer}`)

    const email = localStorage.getItem('email')

    try{
        const {data} = await api.post(`/questions/guess/${bookid}/${groupid}/${question.id}`, {answer,email}, authorizaton)
        
        const correct = data

        if(correct)
            console.log('                   ✅ Resposta correta')
        else
            console.log('                   🅾️ Resposta incorreta')
        
        return correct
    }catch{
        console.log('⚠️ Ocorreu um erro ao chutar questão')
        return null
    }

}
