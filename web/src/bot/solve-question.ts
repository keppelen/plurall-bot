import { GuessMultipleChoice } from "./answer-type/guess-multiple-choice";
import { GuessOpenAnswer } from "./answer-type/guess-open-answer";
import { IQuestion, IQuestionGroup } from "./requests/questions";
import { ReadAnswer } from "./answer-type/read-answer";
import { cancel } from "./main";


export async function SolveQuestionGroup(questionGroup:IQuestionGroup, bookid:string) {
    console.log(`           📕 Fazendo grupo do questões: ${questionGroup.title}`)

    const questions:IQuestion[] = questionGroup.subtasks

    for(let x = 0; x < questions.length; x++){
        if(cancel) return
        await SolveQuestion(questions[x], questionGroup.id, bookid)
    }
}

async function SolveQuestion(question:IQuestion, groupid:number, bookid:string){
    console.log(`               📝 Fazendo questão ${question.title}`)

    if(cancel) return

    if(question.status !== null){
        console.log('                   🤙 Alternativa já chutada, indo para proxima')
        return
    }

    const type = question.task_type

    if(type === 'video') return

    if(type === 'read')
        return await ReadAnswer(question, groupid, bookid)
    
    if(type === 'open_response')
        return await GuessOpenAnswer(question, groupid, bookid)
    
    if(type === 'multiple_choice')
        return await GuessMultipleChoice(question, groupid, bookid)
    
    
}
