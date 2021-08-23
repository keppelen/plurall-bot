import { Cipher } from "crypto"
import { Request, Response } from "express"
import {Model} from 'mongoose'
import { IQuestion } from "../models/question"
import { QuestionModel } from "../models/question"
import { Authenticate } from "../requests/athenticate"
import GetBooks from "../requests/books"
import GetTaskGroup from "../requests/tasks"

const Question:Model<IQuestion> = QuestionModel

export async function login(req:Request, res:Response) {
    try{
        const {email,password} = req.body

        if(!email || !password)
            return res.status(400).send({error: 'Request malformed'})

        const token = await Authenticate(email,password)

        if(!token)
            return res.status(400).send({error: 'Email ou senha inválidos'})

        return res.status(200).send({token})
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

export async function booklist(req:Request, res:Response) {
    try{
        const {token} = req

        if(!token)
            return res.status(400).send({error: 'No token provided'})

        const books = await GetBooks(token)

        if(!books)
            return res.status(400).send({error: 'Ocorreu um erro ao carregar as apostilas'})

        return res.status(200).send(books)
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

export async function tasklist(req:Request, res:Response) {
    try{
        const {token} = req
        const {bookid} = req.params

        if(!token)
            return res.status(400).send({error: 'No token provided'})

        const tasks = await GetTaskGroup(bookid, token)

        if(!tasks)
            return res.status(400).send({error: 'Erro ao pegar as tarefas'})

        return res.status(200).send(tasks)
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}