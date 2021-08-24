import { GuessAnswer } from "../requests/guess-answer";
import { IQuestion } from "../requests/questions";

export async function ReadAnswer(question:IQuestion, groupid:number, bookid:string){
    console.log('                   📜"Lendo" as parada')

    const answer = Random(0,9999999999)
    await GuessAnswer(question, groupid, answer.toString(), bookid)
}


function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
