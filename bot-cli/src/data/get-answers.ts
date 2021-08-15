import axios from "axios";
import { IBook } from "../requests/books";
import dotenv from 'dotenv'
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