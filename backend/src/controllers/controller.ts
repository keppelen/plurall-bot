import { Request, Response } from "express"
import { Authenticate } from "../requests/athenticate"
import GetBooks from "../requests/books"
import { GuessAnswer } from "../requests/guess-answer"
import { GetQuestionGroup } from "../requests/questions"
import GetTaskGroup from "../requests/tasks"


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
            return res.status(400).send({error: 'Não foi possivel pegar as tarefas'})

        return res.status(200).send(tasks)
    }catch{
        return res.status(400).send({error: 'Erro ao pegar as tarefas'})
    }
}

export async function questionlist(req:Request, res:Response) {
    try{
        const {token} = req
        const {taskid} = req.params

        if(!token)
            return res.status(400).send({error: 'No token provided'})

        const questions = await GetQuestionGroup(taskid, token)

        if(!questions)
            return res.status(400).send({error: 'Não foi possivel pegar as perguntas da tarefa'})

        return res.status(200).send(questions)
    }catch{
        return res.status(400).send({error: 'Erro ao pegar as perguntas da tarefa'})
    }
}

export async function guessQuestion(req:Request, res:Response) {
    try{
        const {token} = req
        const {answer, email} = req.body
        const {bookid,groupid, questionid} = req.params

        if(!token)
            return res.status(400).send({error: 'No token provided'})

        const questions = await GuessAnswer(bookid ,groupid, questionid, answer ,token, email)

        if(questions === null)
            return res.status(400).send({error: 'Não foi possivel chutar a pergunta'})

        return res.status(200).send(questions)
    }catch{
        return res.status(400).send({error: 'Erro ao chutar a pergunta'})
    }
} // :bookid/:groupid/:questionid