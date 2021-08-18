import { SolveWhichTask } from "./interface/solve-which-task";
import { IBook } from "./requests/books";
import GetTaskGroup, { ITaskGroup } from "./requests/tasks";
import { SolveTaskGroup } from "./solve-task";


export async function SolveBook(book:IBook, option='all'){
    console.log(`Resolvendo apostila: ${book.value}`)
    console.log(`Método: ${option}`)

    const taskGroups:ITaskGroup[] = await GetTaskGroup(book)

    switch(option){
        case 'all':
            SolveEntireBook(book,taskGroups)
        break
        case 'one':
            SolveSingleTask(book,taskGroups)
        break
    }

}


async function SolveEntireBook(book:IBook, taskGroups:ITaskGroup[]){

    for(let x = 0; x < taskGroups.length; x++){
        await SolveTaskGroup(book,taskGroups[x])
    }
}

async function SolveSingleTask(book:IBook, taskGroups:ITaskGroup[]){
    console.log('Resovendo uma questão só...')
    const taskToSolve = SolveWhichTask(taskGroups)

}