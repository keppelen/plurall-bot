import { IBook } from "../requests/books"
import { IQuestion } from "../requests/questions"
import { convert } from 'html-to-text'
import axios from "axios"
import dotenv from 'dotenv'
import { config } from "../config/config"
dotenv.config()

const saveExampleText = 'Já assisti a video aula, porém ainda não entendi a resposta'


export async function SaveAnswer(question:IQuestion, groupid:number, answer:string, book:IBook){
    if(question.task_type === 'read') return
    
    console.log(`                   💾 Salvando alternativa correta...`)
    
    let finalAnswer = answer
    
    if(question.task_type === 'open_response')
      finalAnswer = TreatHtml(answer)
    
    console.log(`                   💾 Resposta: ${finalAnswer}`)

    const body = {
      answer: finalAnswer,
      email: config.Email
    }

    try{
      await axios.post(`${process.env.BACKEND_CONNECTION_IP}/add/${book.id}/${groupid}/${question.id}`, body)
    }catch{
      console.log('⚠️ Ocorreu um erro ao salvar resposta da questão')
    }

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
      if(line.startsWith('[') && line.endsWith(']'))
        treatedTextArray.splice(treatedTextArray.indexOf(line), 1)
      
      if(line.startsWith('«'))
        treatedTextArray.splice(treatedTextArray.indexOf(line), 1)
      
  });

  treatedText = treatedTextArray.join(' ')

  if(treatedText.replace(' ', '') === '')
    treatedText = saveExampleText
  
  console.log(`                   💾 Resposta Corrigida: ${treatedText}`)
  return treatedText
}