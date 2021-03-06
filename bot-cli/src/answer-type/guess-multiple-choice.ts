import axios, { AxiosRequestConfig } from "axios";
import { GetAnswer } from "../data/get-answers";
import { IBook } from "../requests/books";
import { GuessAnswer } from "../requests/guess-answer";
import { IQuestion } from "../requests/questions";

export async function GuessMultipleChoice(question:IQuestion, groupid:number, book:IBook){
    let alternatives:string[] = ['a','b','c','d','e']

    let attempts = 3

    const findedAnswer = GetAnswer(question,groupid,book)

    if(findedAnswer){  
        console.log(`                   ✏️ Resposta encontrada: ${findedAnswer.answer}`)

        const isCorrect = await GuessAnswer(question, groupid, findedAnswer.answer, book)

        if(!isCorrect){
            console.log(`                   ⚠️ Resposta Incorreta, seguindo método de chute`)
            attempts = 2
            alternatives = alternatives.filter(item => item !== findedAnswer.answer.toLowerCase()) //remove wron answer from guess list
        }else{
            return
        }
    }

    for(let x = 0; x < attempts; x++){
        const guess = alternatives[Random(0,alternatives.length-1)]

        const isCorrect = await GuessAnswer(question, groupid, guess, book)
        if(isCorrect) return

        alternatives = alternatives.filter(item => item !== guess)
    }
}


function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}