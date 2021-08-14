import { GuessMultipleChoice } from "./answer-type/guess-multiple-choice";
import { GuessOpenAnswer } from "./answer-type/guess-open-answer";
import { IQuestion, IQuestionGroup } from "./requests/questions";
import { ReadAnswer } from "./answer-type/read-answer";



export async function SolveQuestionGroup(questionGroup:IQuestionGroup) {
    console.log(`           📕 Fazendo grupo do questões: ${questionGroup.title}`)

    const questions:IQuestion[] = questionGroup.subtasks

    for(let x = 0; x < questions.length; x++){
        await SolveQuestion(questions[x], questionGroup.id)
    }
}

async function SolveQuestion(question:IQuestion, groupid:number) {
    console.log(`               📝 Fazendo questão ${question.title}`)

    if(question.status !== null){
        console.log('                   🤙 Alternativa já chutada, indo para proxima')
        return
    }

    const type = question.task_type

    if(type === 'video') return

    if(type === 'read')
        return await ReadAnswer(question,groupid)
    
    if(type === 'open_response')
        return await GuessOpenAnswer(question,groupid)
    
    if(type === 'multiple_choice')
        return await GuessMultipleChoice(question,groupid)
    
    
}
