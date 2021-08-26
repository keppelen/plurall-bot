import { cancel } from "./main";
import GetTaskGroup, { ITask, ITaskGroup } from "./requests/tasks";
import { SolveTask, SolveTaskGroup } from "./solve-task";


export async function SolveBook(bookid:string, option='all', taskToSolveId:string){
    console.log(`Resolvendo apostila: ${bookid}`)
    console.log(`Método: ${option}`)

    const taskGroups:ITaskGroup[] = await GetTaskGroup(bookid)

    switch(option){
        case 'all':
            await SolveEntireBook(bookid, taskGroups)
        break
        case 'one':
            await SolveSingleTask(bookid, taskGroups, taskToSolveId)
        break
    }

}


async function SolveEntireBook(bookid:string, taskGroups:ITaskGroup[]){

    for(let x = 0; x < taskGroups.length; x++){
        if(cancel) return
        await SolveTaskGroup(bookid, taskGroups[x])
    }
}

async function SolveSingleTask(bookid:string, taskGroups:ITaskGroup[], taskToSolveId:string){

    let task:ITask = {    
        id: parseInt(taskToSolveId),
        name: 'Task example',
        official_answer_in_words: null,
        progress: {
            correct: 0,
            wrong: 0, 
            total: 10
        },
        user_task_id: 1,
        status_in_words: 'string',
        status: 'string',
        end_date: null
    }

    taskGroups.map(tg => {
        tg.tasks.map(tsk => {
            if(tsk.id.toString() === taskToSolveId)
                task = tsk
        })
    })

    await SolveTask(task, bookid)
    if(cancel) return
    console.log("✅ Tarefa Concluida")

}