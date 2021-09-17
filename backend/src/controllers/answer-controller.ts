import { Request, Response } from "express"
import {Model} from 'mongoose'
import { IQuestion } from "../models/question"
import { QuestionModel } from "../models/question"
import { convert } from 'html-to-text'
import fs from 'fs'

const Question:Model<IQuestion> = QuestionModel

const saveExampleText = 'Já assisti a video aula, porém ainda não entendi a resposta'

const maxlog = 40
let savedlogs = 0
let log:IQuestion[] = []

export async function SaveAnswer(bookid:string, groupid:string, questionid:string, answer:string, email:string) {
    try{
        const alreadyAnswer = await Question.find({bookid,groupid,questionid})
        
        if(alreadyAnswer.length > 0) return

        const treatedAnswer = TreatHtml(answer)

        const newQuestion = await Question.create({
            book: bookid,
            group: groupid,
            question: questionid,
            answer: treatedAnswer,
            email: email ? email : 'undefined'
        })

        // console.log(newQuestion)
        saveLog(newQuestion)

        return true
    }catch{
        console.log('ERRO ao adicionar resposta')
    }
}

async function saveLog(question:IQuestion){
  if(savedlogs >= maxlog){
    savedlogs = 0

    fs.writeFile('log.json', JSON.stringify(log), err => {
      if(err) return console.log('Erro ao escrever no json')
    })

    log = []
  }
  log.push(question)
  savedlogs++

}

function TreatHtml(answer:string){
    let treatedText = ''
    const html = answer;
    const text = convert(html, {
      wordwrap: 130
    });
    treatedText = text.replace('-­-­', '-')
    let treatedTextArray = treatedText.split('\n')
  
    treatedTextArray.forEach(line => {
        if(line.startsWith('[') && line.endsWith(']'))
          treatedTextArray.splice(treatedTextArray.indexOf(line), 1)
        
        if(line.startsWith('«'))
          treatedTextArray.splice(treatedTextArray.indexOf(line), 1)
        
    })
  
    treatedText = treatedTextArray.join(' ')
  
    if(treatedText.replace(' ', '') === '')
      treatedText = saveExampleText
    
    return treatedText
  }

export async function list(req:Request, res:Response) {
    try{
        const {book} = req.params

        if(!book)
            return res.status(400).send({error: 'Request malformed'})

        const answers = await Question.find({book})

        return res.status(200).send(answers)
    }catch{
        return res.status(400).send({error: 'Erro ao adicionar dados'})
    }
}

export async function totalanswers(req:Request, res:Response) {
  try{
      const {book} = req.query

      const search = book ?
      { book: book.toString()}
      : {}

      const answers = await Question.find(search)

      const totalansers = answers.length

      return res.status(200).send({total: totalansers})
  }catch{
      return res.status(400).send({error: 'Erro ao pegar quantidade de respostas'})
  }
}