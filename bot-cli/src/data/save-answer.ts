import { IBook } from "../requests/books"
import { IQuestion } from "../requests/questions"
import { convert } from 'html-to-text'
import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()


export function SaveAnswer(question:IQuestion, groupid:number, answer:string, book:IBook){
    console.log(`                   💾 Salvando alternativa correta...`)
    console.log(`                   💾 Dados:`)
    console.log(`                   💾   Book:  ${book.id}`)
    console.log(`                   💾   Group:  ${groupid}`)
    console.log(`                   💾   Question:  ${question.id}`)
    console.log(`                   💾 Resposta: ${answer}`)

    let finalAnswer = answer

    if(question.task_type === 'open_response'){
        const html = answer;
        const text = convert(html, {
          wordwrap: 130
        });
        finalAnswer = text.replace('-­-­', '-')
        console.log(`                   💾 Resposta Corrigida: ${finalAnswer}`)
    }

    const body = {
      answer: finalAnswer
    }

    axios.post(`${process.env.BACKEND_CONNECTION_IP}/add/${book.id}/${groupid}/${question.id}`, body)

    // returns A - B - C... 
}