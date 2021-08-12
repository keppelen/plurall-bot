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
    
    let alternatives:string[] = ['a','b','c','d','e']

    for(let x = 0; x < 3; x++){
        const guess = alternatives[Random(0,alternatives.length-1)]

        const isCorrect = await GuessAnswer(question, groupid, guess)
        if(isCorrect) return

        alternatives = alternatives.filter(item => item !== guess)
    }
}

function Random(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}