import { Timeout } from "../tools/timeout";
import { GuessAnswer } from "../requests/guess-answer";
import { IQuestion } from "../requests/questions";

const delay = 1000 

export async function ReadAnswer(question:IQuestion,groupid:number){
    console.log('                   📜"Lendo" as parada')

    await Timeout(delay)
    const answer = Random(0,9999999999)
    await GuessAnswer(question, groupid, answer.toString())
}


function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
