import { ITask, ITaskGroup } from "../requests/tasks";
import { stringAnswer } from "../tools/answer";

interface ITaskToSolve {
    taskgroup:ITaskGroup,
    task:ITask
}


export function SolveWhichTask(taskGroups:ITaskGroup[]){
    console.log('Selecione a tarefa que deseja resolver:')

    printOptions(taskGroups)

    const answer = stringAnswer('Digite a tarefa que deseja resolver (ex 3-1): ')
    const taskToSolve = getTaskFromAnswer(answer,taskGroups)

    if(!taskToSolve) return console.log('⚠️ Ocorreu um erro ao pegar tarefa a ser resolvida')

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

    const [taskGroupI,taskI] = answer.split('-')

    let taskToSolve:ITaskToSolve|null = null

    taskGroups.forEach(taskgroup => {
        const groupIndex = taskGroups.indexOf(taskgroup)
        const groupTasks = taskgroup.tasks

        groupTasks.forEach(task => {
            const taskIndex = groupTasks.indexOf(task)

            if(taskGroupI === groupIndex.toString() && taskI === taskIndex.toString()){
                taskToSolve = {
                    taskgroup,
                    task
                }
            }
        })
    })

    return taskToSolve
}