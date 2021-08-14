import { IBook } from "../requests/books"
import { IQuestion } from "../requests/questions"



export function SaveAnswer(question:IQuestion, groupid:number, answer:string, book:IBook){
    console.log(`                   💾 Salvando alternativa correta...`)
    console.log(`                   💾 Dados:`)
    console.log(`                   💾   Book:  ${book.id}`)
    console.log(`                   💾   Group:  ${groupid}`)
    console.log(`                   💾   Question:  ${question.id}`)
    console.log(`                   💾 Resposta: ${answer}`)

    if(question.task_type === 'open_response'){
        // returns html
        return
    }

    // returns A - B - C... 
}