import GetTasks, { ITask, ITaskGroup } from "./requests/tasks"
import { GetQuestionGroup, IQuestionGroup } from "./requests/questions"
import { SolveQuestionGroup } from "./solve-question"
import { cancel } from "./main"


export async function SolveTaskGroup(bookid:string, taskGroup:ITaskGroup){
    console.log(`📂 Resolvendo task group: ${taskGroup.title}`)
    const {tasks} = taskGroup

    for(let x = 0; x < tasks.length; x++){
        if(cancel) return
        await SolveTask(tasks[x].id.toString(), bookid)
    }
    
}

export async function SolveTask(taskId:string, bookid:string){
    // if(isAlreadyFullSolved(task)){
    //     console.log(`   ✅ Task ja resolvida por completo, próxima`)
    //     return
    // }
    console.log(`   📝 Fazendo task ${taskId}`)

    const questionGroup:IQuestionGroup[] = await GetQuestionGroup(taskId)
    for(let x = 0; x < questionGroup.length; x++){
        if(cancel) return
        await SolveQuestionGroup(questionGroup[x], bookid)
    }
}

function isAlreadyFullSolved(task:ITask){
    const {total, correct, wrong} = task.progress
    return total === (correct + wrong)
}
