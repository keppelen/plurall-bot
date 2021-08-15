import axios from "axios";
import { IBook } from "../requests/books";
import dotenv from 'dotenv'
import { IQuestion } from "../requests/questions";
dotenv.config()

interface IAnswer{
    _id: string,
    book: string,
    group: string,
    question: string,
    answer: string,
}

export let answers:IAnswer[]|null = null


export async function GetAnswers(book:IBook){
    console.log('Pegando as repostas ta apostila...')
    try{
        const response = await axios.get(`${process.env.BACKEND_CONNECTION_IP}/list/${book.id}`)
        answers = response.data
    }catch{
        console.log('Ocorreu um erro ao buscar as respostas :/')
    }
}

export function GetAnswer(question:IQuestion, groupid:number, book:IBook){
    console.log('                   Procurando resposta...')
    if(!answers) return null
    if(answers.length <= 0) return null
    const findedAnswer = answers?.filter(element => element.group === groupid.toString() && element.question === question.id)
    return findedAnswer.length > 0 ? findedAnswer[0] : null
}
