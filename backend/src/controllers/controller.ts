import { Cipher } from "crypto"
import { Request, Response } from "express"
import {Model} from 'mongoose'
import { IQuestion } from "../models/question"
import { QuestionModel } from "../models/question"
import { Authenticate } from "../requests/athenticate"

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