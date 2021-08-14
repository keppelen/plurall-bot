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

    if(question.task_type === 'open_response')
      finalAnswer = TreatHtml(answer)
    
    const body = {
      answer: finalAnswer
    }

    axios.post(`${process.env.BACKEND_CONNECTION_IP}/add/${book.id}/${groupid}/${question.id}`, body)

}



function TreatHtml(answer:string){
  let treatedText = ''
  const html = answer;
  const text = convert(html, {
    wordwrap: 130
  });
  treatedText = text.replace('-­-­', '-')
  let treatedTextArray = treatedText.split('\n')

  console.log('before:')
  console.log(treatedText)

  treatedTextArray.forEach(line => {
      if(line.startsWith('[') && line.endsWith(']')){
        treatedTextArray.splice(treatedTextArray.indexOf(line), 1)
      }
  });

  console.log(`                   💾 Resposta Corrigida: ${treatedText}`)
  return treatedText
}