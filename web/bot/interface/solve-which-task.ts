import { ITask, ITaskGroup } from "../requests/tasks";
import { stringAnswer } from "../tools/answer";


export function SolveWhichTask(taskGroups:ITaskGroup[]){
    console.log('Selecione a tarefa que deseja resolver:')

    printOptions(taskGroups)

    const answer = stringAnswer('Digite a tarefa que deseja resolver (ex 3-1): ')
    const taskToSolve:ITask|null = getTaskFromAnswer(answer,taskGroups)

    return taskToSolve
}


function printOptions(taskGroups:ITaskGroup[]){
    taskGroups.forEach(taskgroup => {
        const groupIndex = taskGroups.indexOf(taskgroup)
        console.log(`\n[${groupIndex}] ${taskgroup.title}:`)

        const groupTasks = taskgroup.tasks

        groupTasks.forEach(task => {
            const taskIndex = groupTasks.indexOf(task)
            console.log(`   [${groupIndex}-${taskIndex}] ${task.name}`)
        })
    })
}

function getTaskFromAnswer(answer:string,taskGroups:ITaskGroup[]){
    if(!answer.includes('-')) return null

    const [taskGroup,task] = answer.split('-')

    for(let x = 0; x < taskGroups.length; x++){

        for(let y = 0; y < taskGroups[x].tasks.length; y++){

            if(taskGroup === x.toString() && task === y.toString())
                return taskGroups[x].tasks[y]
        }
    }

    return null
}