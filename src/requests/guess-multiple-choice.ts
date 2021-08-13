import axios, { AxiosRequestConfig } from "axios";
import { Timeout } from "../tools/timeout";
import { GuessAnswer } from "./guess-answer";
import { IQuestion } from "./questions";

export async function GuessMultipleChoice(question:IQuestion,groupid:number){
    let alternatives:string[] = ['a','b','c','d','e']

    for(let x = 0; x < 3; x++){
        const guess = alternatives[Random(0,alternatives.length-1)]

        const isCorrect = await GuessAnswer(question, groupid, guess)
        if(isCorrect) return

        alternatives = alternatives.filter(item => item !== guess)
    }
}


function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}