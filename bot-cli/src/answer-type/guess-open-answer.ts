import { IBook } from "../requests/books";
import { GuessAnswer } from "../requests/guess-answer";
import { IQuestion } from "../requests/questions";

const resposta = 'Frase para responder'

export async function GuessOpenAnswer(question:IQuestion, groupid:number, book:IBook){
    console.log(`                   ✏️📝 Tentando resposta aberta`)
    await GuessAnswer(question, groupid, resposta, book)
}