import { Request, Response } from "express"
import { Authenticate } from "../requests/athenticate"
import GetBooks from "../requests/books"
import { GuessAnswer } from "../requests/guess-answer"
import { GetQuestionGroup } from "../requests/questions"
import GetTaskGroup from "../requests/tasks"
import { checkUser } from "./adm-controller"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.TOKEN_SECRET || ''

interface Itokenparams {
    email: string,
    pluralltoken: string
}

function generateToken(params:Itokenparams){
    return jwt.sign(params, secret)
}

export async function login(req:Request, res:Response) {
    try{
        const {email,password} = req.body

        if(!email || !password)
            return res.status(400).send({error: 'Request malformed'})

        if(!await checkUser(email))
            return res.status(401).send({error: 'Você ainda não possui acesso à plataforma'})

        const pluralltoken = await Authenticate(email,password)

        if(!pluralltoken)
            return res.status(400).send({error: 'Email ou senha inválidos'})

        const token = generateToken({email,pluralltoken})

        return res.status(200).send({token})
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

export async function booklist(req:Request, res:Response) {
    try{
        const {pluralltoken, email} = req

        if(!pluralltoken || !email)
        return res.status(400).send({error: 'No token provided'})

        if(!await checkUser(email))
            return res.status(401).send({error: 'Você ainda não possui acesso à plataforma'})
        
        const books = await GetBooks(pluralltoken)

        if(!books)
            return res.status(400).send({error: 'Ocorreu um erro ao carregar as apostilas'})

        return res.status(200).send(books)
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

function isNumber(n:any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export async function tasklist(req:Request, res:Response) {
    try{
        const {pluralltoken, email} = req
        const {bookid} = req.params
        const {page} = req.query

        let numpage = 1

        if(page){
            if(isNumber(page))
                numpage = parseInt(page.toString())
        }

        if(!pluralltoken || !email)
            return res.status(400).send({error: 'No token provided'})

        if(!await checkUser(email))
            return res.status(401).send({error: 'Você ainda não possui acesso à plataforma'})

        const tasks = await GetTaskGroup(bookid, pluralltoken, numpage) 

        if(!tasks)
            return res.status(400).send({error: 'Não foi possivel pegar as tarefas'})

        return res.status(200).send(tasks)
    }catch{
        return res.status(400).send({error: 'Erro ao pegar as tarefas'})
    }
}

export async function questionlist(req:Request, res:Response) {
    try{
        const {pluralltoken, email} = req
        const {taskid} = req.params

        if(!pluralltoken || !email)
            return res.status(400).send({error: 'No token provided'})

        if(!await checkUser(email))
            return res.status(401).send({error: 'Você ainda não possui acesso à plataforma'})

        const questions = await GetQuestionGroup(taskid, pluralltoken)

        if(!questions)
            return res.status(400).send({error: 'Não foi possivel pegar as perguntas da tarefa'})

        return res.status(200).send(questions)
    }catch{
        return res.status(400).send({error: 'Erro ao pegar as perguntas da tarefa'})
    }
}

export async function guessQuestion(req:Request, res:Response) {
    try{
        const {pluralltoken} = req
        const {answer, email} = req.body
        const {bookid,groupid, questionid} = req.params

        if(!pluralltoken)
            return res.status(400).send({error: 'No token provided'})

        const questions = await GuessAnswer(bookid ,groupid, questionid, answer ,pluralltoken, email)

        if(questions === null)
            return res.status(400).send({error: 'Não foi possivel chutar a pergunta'})

        return res.status(200).send(questions)
    }catch{
        return res.status(400).send({error: 'Erro ao chutar a pergunta'})
    }
} // :bookid/:groupid/:questionid