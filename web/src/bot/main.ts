import { SolveBook } from './solve-book'
import { GetAnswers } from './data/get-answers'
import { ITask } from '../pages/which-task/task'

export async function Solve(bookid:string,how:string, taskToSolveId:string){
    await GetAnswers(bookid)
    await SolveBook(bookid,how,taskToSolveId)
}