import { IBook } from "./requests/books"
import GetTasks, { ITask, ITaskGroup } from "./requests/tasks"
import { GetQuestionGroup, IQuestionGroup } from "./requests/questions"
import { SolveQuestionGroup } from "./solve-question"


export async function SolveTaskGroup(book:IBook, taskGroup:ITaskGroup){
    console.log(`📂 Resolvendo task group: ${taskGroup.title}`)
    const {tasks} = taskGroup

    for(let x = 0; x < tasks.length; x++){
        await SolveTask(tasks[x])
    }
    
}

async function SolveTask(task:ITask){
    if(isAlreadyFullSolved(task)){
        console.log(`   ✅ Task ja resolvida por completo, próxima`)
        return
    }
    console.log(`   📝 Fazendo task ${task.name}`)

    const questionGroup:IQuestionGroup[] = await GetQuestionGroup(task)
    for(let x = 0; x < questionGroup.length; x++){
        await SolveQuestionGroup(questionGroup[x])
    }
}

function isAlreadyFullSolved(task:ITask){
    const {total, correct, wrong} = task.progress
    return total === (correct + wrong)
}
