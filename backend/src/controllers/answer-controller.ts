import { Cipher } from "crypto"
import { Request, Response } from "express"
import {Model} from 'mongoose'
import { IQuestion } from "../models/question"
import { QuestionModel } from "../models/question"

const Question:Model<IQuestion> = QuestionModel

export async function add(req:Request, res:Response) {
    try{
        const {answer, email} = req.body
        const {book, group,question} = req.params

        if(!((group) && (question) && (answer) && (book) && (email)))
            return res.status(400).send({error: 'Request malformed'})

        const alreadyAnswer = await Question.find({book,group,question})
        
        if(alreadyAnswer.length > 0)
            return res.status(400).send({error: 'Answer already exists'})

        const newQuestion = await Question.create({
            book,
            group,
            question,
            answer,
            email
        })

        console.log(newQuestion)

        return res.status(200).send(newQuestion)
    }catch{
        return res.status(400).send({error: 'Erro ao adicionar dados'})
    }
}


export async function SaveAnswer(bookid:string, groupid:string, questionid:string, answer:string) {
    try{
        const alreadyAnswer = await Question.find({bookid,groupid,questionid})
        
        if(alreadyAnswer.length > 0) return

        const newQuestion = await Question.create({
            bookid,
            groupid,
            questionid,
            answer,
            email: 'teste@teste.com'
        })

        console.log(newQuestion)

        return true
    }catch{
        console.log('ERRO ao adicionar resposta')
    }
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