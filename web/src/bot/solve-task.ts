import { ITask, ITaskGroup } from "./requests/tasks"
import { GetQuestionGroup, IQuestionGroup } from "./requests/questions"
import { SolveQuestionGroup } from "./solve-question"
import { cancel, updateTaskData } from "./main"


export async function SolveTaskGroup(bookid:string, taskGroup:ITaskGroup){
    console.log(`📂 Resolvendo task group: ${taskGroup.title}`)
    const {tasks} = taskGroup

    for(let x = 0; x < tasks.length; x++){
        if(cancel) return
        await SolveTask(tasks[x], bookid)
    }
    
}

export async function SolveTask(task:ITask, bookid:string){
    if(isAlreadyFullSolved(task)){
        console.log(`   ✅ Task ja resolvida por completo, próxima`)
        return
    }
    
    const {correct,wrong,total} = task.progress
    
    if(correct && wrong)
        updateTaskData({correct, wrong, total})
    else
        updateTaskData({correct:0, wrong:0, total})


    console.log(`   📝 Fazendo task ${task.id}`)

    const questionGroup:IQuestionGroup[] = await GetQuestionGroup(task.id.toString())
    for(let x = 0; x < questionGroup.length; x++){
        if(cancel) return
        await SolveQuestionGroup(questionGroup[x], bookid)
    }
}

function isAlreadyFullSolved(task:ITask){
    const {total, correct, wrong} = task.progress
    return total === (correct + wrong)
}
