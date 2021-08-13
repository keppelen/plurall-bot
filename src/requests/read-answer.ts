import { Timeout } from "../tools/timeout";
import { GuessAnswer } from "./guess-answer";
import { IQuestion } from "./questions";

const delay = 1000 //ms

//1628876364
//9999999999

export async function ReadAnswer(question:IQuestion,groupid:number){
    console.log('                   📜"Lendo" as parada')

    await Timeout(delay)

    await GuessAnswer(question, groupid, 'a')
}
