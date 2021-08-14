import { IBook } from "../requests/books"
import { IQuestion } from "../requests/questions"



export function SaveAnswer(question:IQuestion, groupid:number, answer:string, book:IBook){
    console.log(`                   💾 Salvando alternativa correta...`)
    console.log(`                   💾 Dados:  ${question.id} | ${groupid}`)
    console.log(`                   💾 Resposta: ${answer}`)

    if(question.task_type === 'open_response'){
        // returns html
        return
    }

    // returns A - B - C... 
}