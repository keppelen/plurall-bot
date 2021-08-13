import { GuessAnswer } from "./guess-multiple-choice";
import { IQuestion } from "./questions";

const resposta = 'Frase para responder'

export async function GuessOpenAnswer(question:IQuestion,groupid:number){
    console.log(`                   ✏️📝 Tentando resposta aberta, Respondendo GRUPO: ${groupid} | QUEST: ${question.id} | RESP: ${resposta}}`)
    await GuessAnswer(question,groupid,resposta)
}