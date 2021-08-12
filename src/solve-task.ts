import { IBook } from "./requests/books"
import { GetQuestions } from "./requests/questions"
import GetTasks, { ITask, ITaskGroup } from "./requests/tasks"


export async function SolveTaskGroup(book:IBook, taskGroup:ITaskGroup){
    console.log(`📂 Resolvendo task group: ${taskGroup.title}`)
    const {tasks} = taskGroup

    for(let x = 0; x < tasks.length; x++){
        const task:ITask = tasks[x]
        await SolveTask(task)
    }
    
}


async function SolveTask(task:ITask){
    if(isAlreadyFullSolved(task)){
        console.log(`✅ Task ja resolvida por completo, próxima`)
        return
    }

    console.log(`📝 Fazendo task ${task.name}`)
}

function isAlreadyFullSolved(task:ITask){
    const {total, correct, wrong} = task.progress
    return total === (correct + wrong)
}