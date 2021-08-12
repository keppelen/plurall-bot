import { GuessMultipleChoice } from "./requests/guess-multiple-choice";
import { GuessOpenAnswer } from "./requests/guess-open-answer";
import { IQuestion, IQuestionGroup } from "./requests/questions";
import { ReadAnswer } from "./requests/read-answer";



export async function SolveQuestionGroup(questionGroup:IQuestionGroup) {
    console.log(`           📕 Fazendo grupo do questões: ${questionGroup.title}`)

    const questions:IQuestion[] = questionGroup.subtasks
    for(let x = 0; x < questions.length; x++){
        await SolveQuestion(questions[x], questionGroup.id)
    }
}

async function SolveQuestion(question:IQuestion, groupid:number) {
    console.log(`               📝 Fazendo questão ${question.title}`)

    const type = question.task_type

    if(type === 'video') return

    if(type === 'read')
        return await ReadAnswer(question,groupid)
    
    if(type === 'open_response')
        return await GuessOpenAnswer(question,groupid)
    
    if(type === 'multiple_choice')
        return await GuessMultipleChoice(question,groupid)
    
    
}
