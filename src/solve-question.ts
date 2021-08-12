import { IQuestion, IQuestionGroup } from "./requests/questions";



export async function SolveQuestionGroup(questionGroup:IQuestionGroup) {
    console.log(`           📕 Fazendo grupo do questões: ${questionGroup.title}`)

    const questions:IQuestion[] = questionGroup.subtasks
    for(let x = 0; x < questions.length; x++){
        await SolveQuestion(questions[x])
    }
}

async function SolveQuestion(question:IQuestion) {
    console.log(`               📝 Fazendo questão ${question.title}`)
}