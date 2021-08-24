import { IQuestion } from "../requests/questions";
import api, { authorizaton } from "../../services/api";

interface IAnswer{
    _id: string,
    book: string,
    group: string,
    question: string,
    answer: string,
}

export let answers:IAnswer[]|null = null

export async function GetAnswers(bookid:string){
    console.log('Pegando as repostas ta apostila...')
    try{
        const response = await api.get(`/answer/list/${bookid}`, authorizaton)
        answers = response.data
        console.log(answers)
    }catch{
        console.log('Ocorreu um erro ao buscar as respostas :/')
    }
}

export function GetAnswer(question:IQuestion, groupid:number, bookid:string){
    if(!answers) return null
    if(answers.length <= 0) return null
    const findedAnswer = answers?.filter(element => {
        return element.group === groupid.toString()
    })

    const findedAnswer2 = findedAnswer?.filter(element => {
        return element.question === question.id.toString()
    })

    return findedAnswer2.length > 0 ? findedAnswer2[0] : null
}
