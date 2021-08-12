import { GuessAnswer } from "./requests/guess-answer";
import { IQuestion, IQuestionGroup } from "./requests/questions";



export async function SolveQuestionGroup(questionGroup:IQuestionGroup) {
    console.log(`           📕 Fazendo grupo do questões: ${questionGroup.title}`)

    const questions:IQuestion[] = questionGroup.subtasks
    for(let x = 0; x < questions.length; x++){
        await SolveQuestion(questions[x], questionGroup.id)
    }
}

async function SolveQuestion(question:IQuestion, groupid:number) {
    console.log(`               📝 Fazendo questão ${question.title}`)
    
    for(let x = 0; x < 3; x++){
        await GuessAnswer(question, groupid, 'a');
    }
}