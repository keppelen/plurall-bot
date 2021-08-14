import { IBook } from "../requests/books"
import { IQuestion } from "../requests/questions"
import { convert } from 'html-to-text'


export function SaveAnswer(question:IQuestion, groupid:number, answer:string, book:IBook){
    console.log(`                   💾 Salvando alternativa correta...`)
    console.log(`                   💾 Dados:`)
    console.log(`                   💾   Book:  ${book.id}`)
    console.log(`                   💾   Group:  ${groupid}`)
    console.log(`                   💾   Question:  ${question.id}`)
    console.log(`                   💾 Resposta: ${answer}`)

    if(question.task_type === 'open_response'){
        const html = answer;
        const text = convert(html, {
          wordwrap: 130
        });
        console.log(`                   💾 Resposta Corrigida: ${text}`)
        answer = html.replace('-­-­', '-')
        return
    }

    // returns A - B - C... 
}