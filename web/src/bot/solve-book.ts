import GetTaskGroup, { ITask, ITaskGroup } from "./requests/tasks";
import { SolveTask, SolveTaskGroup } from "./solve-task";


export async function SolveBook(bookid:string, option='all', taskToSolveId:string){
    console.log(`Resolvendo apostila: ${bookid}`)
    console.log(`Método: ${option}`)

    const taskGroups:ITaskGroup[] = await GetTaskGroup(bookid)

    switch(option){
        case 'all':
            SolveEntireBook(bookid, taskGroups)
        break
        case 'one':
            SolveSingleTask(bookid, taskGroups, taskToSolveId)
        break
    }

}


async function SolveEntireBook(bookid:string, taskGroups:ITaskGroup[]){

    for(let x = 0; x < taskGroups.length; x++){
        await SolveTaskGroup(bookid, taskGroups[x])
    }
}

async function SolveSingleTask(bookid:string, taskGroups:ITaskGroup[], taskToSolveId:string){
    await SolveTask(taskToSolveId, bookid)

    console.log("✅ Tarefa Concluida")

}