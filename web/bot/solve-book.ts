import { SolveWhichTask } from "./interface/solve-which-task";
import { IBook } from "./requests/books";
import GetTaskGroup, { ITask, ITaskGroup } from "./requests/tasks";
import { SolveTask, SolveTaskGroup } from "./solve-task";


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
    const taskToSolve:ITask|null = SolveWhichTask(taskGroups)

    if(!taskToSolve) return console.log('⚠️ Ocorreu um erro ao pegar tarefa a ser resolvida')

    await SolveTask(taskToSolve, book)

    console.log("✅ Tarefa Concluida")

}