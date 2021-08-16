import { GetAnswer } from "../data/get-answers";
import { IBook } from "../requests/books";
import { GuessAnswer } from "../requests/guess-answer";
import { IQuestion } from "../requests/questions";
 
let resposta = 'Frase para responder'

export async function GuessOpenAnswer(question:IQuestion, groupid:number, book:IBook){
    console.log(`                   ✏️📝 Tentando resposta aberta`)
    
    const findedAnswer = GetAnswer(question,groupid,book)

    if(findedAnswer){
        console.log(`                   ✏️ Resposta encontrada: ${findedAnswer.answer}`)
        resposta = findedAnswer.answer
        console.log(`                   ✏️ Respondendo: ${resposta}`)
    }

    await GuessAnswer(question, groupid, resposta, book)
}