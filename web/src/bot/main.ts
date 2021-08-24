import { SolveBook } from './solve-book'
import { GetAnswers } from './data/get-answers'
import { ItaskData } from '../pages/solving'


export let taskInProgressData:ItaskData = {correct: 0, wrong: 0}

export function updateTaskData(taskdata:ItaskData){
    console.log('atualizando para:')
    console.log(taskdata)
    taskInProgressData = taskdata
}

export function getTaskData(){
    return taskInProgressData
}

export function resetTaskData(){
    taskInProgressData = {correct: 0, wrong: 0}
}

export let cancel = false

export function Cancel(c=true){
    cancel = c
}

export async function Solve(bookid:string,how:string, taskToSolveId:string){
    await GetAnswers(bookid)
    await SolveBook(bookid,how,taskToSolveId)
}