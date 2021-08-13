import { Timeout } from "../tools/timeout";
import { GuessAnswer } from "./guess-multiple-choice";
import { IQuestion } from "./questions";

const delay = 1000 //ms

export async function ReadAnswer(question:IQuestion,groupid:number){
    console.log('                   📜"Lendo" as parada')

    await Timeout(delay)

    await GuessAnswer(question, groupid, 'a')
}
