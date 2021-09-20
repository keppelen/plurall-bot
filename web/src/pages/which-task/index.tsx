import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api, { authorizaton } from '../../services/api'
import AlertBox, { Leave } from '../components/alertbox'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import Header from '../components/header'
import { Page, TasksContainer, TaskGroup, NoTaskText} from './styles'
import Task, { ITask } from './task'

export interface ITaskGroup {
    title: string,
    subtitle: string,
    quick_answer: boolean,
    node_id: string,
    video: {
      title: string,
      url: string,
      thumbnail: string
    },
    end_date: null|string,
    finish_button: null|string,
    receipt_button: null|string,
    tasks: ITask[]
}

export interface IParams {
    id: string,
    name: string
}


const WhichTask:React.FC = () => {
    const {id, name} = useParams<IParams>()
    const [taskGroups, setTaskGroups] = useState<ITaskGroup[]>([])
    const [error,setError] = useState({title:'',description: '',on: false, function: () => {}})
    const [fullsolved, setFullSolved] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function requestTasks(){
            try{
                setLoading(true)
                const response = await api.get(`/task/list/${id}`, authorizaton)
                let taskGroups:ITaskGroup[] = response.data

                let totaltasks = 0
                let totalsolvedtasks = 0

                taskGroups.forEach(taskGroup => { 
                    let tasks = taskGroup.tasks.length
                    let solvedtasks = 0

                    totaltasks += tasks

                    taskGroup.tasks.forEach(task => {
                        const {correct, wrong, total} = task.progress
                        if(correct && wrong){
                            if((correct + wrong) >= total)
                                solvedtasks++
                        }
                    })

                    if(solvedtasks >= tasks){
                        taskGroups.splice(taskGroups.indexOf(taskGroup), 1)
                    }

                    totalsolvedtasks += solvedtasks
                })

                const isfullsolved = totalsolvedtasks >= totaltasks
                setFullSolved(isfullsolved)
                
                setTaskGroups(taskGroups)
                setLoading(false)
            }catch(error:any){
                setLoading(false)
                if(!error) 
                    return setError({title:'Ops!', description: 'Ocorreu um erro inesperado, tente novamente mais tarde :/',on: true, function: () => {}})
                
                if(error.response)
                    setError({title:'Ops!', description: error.response.data.error || 'Ocorreu um erro com os servidores do plurall, tente logar novamente :)',on: true, function: () => {Leave()}})
                else
                    setError({title:'Ops!', description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true, function: () => {}})
            }
        }
        requestTasks()
    },[id])




    return (
        <>
            {error.on && 
                <AlertBox title={error.title} description={error.description} onPressOk={() => {error.function()}}/>
            }
                <Page>

                <Header title='Selecione a tarefa que deseja resolver:'/>
                <Content>
                    
                    <ContentHeader bookname={name} title='Selecione a tarefa desejada'/>

                    {(fullsolved && !loading) && 
                        <NoTaskText> Parabéns! Você ja completou todas as tarefas dessa apostila 🥳 </NoTaskText>
                    }

                    <TasksContainer>
                        {taskGroups.map(taskGroup => 
                            <TaskGroup key={taskGroup.node_id}>
                                
                                {taskGroup.tasks.map(task => 
                                    <Task task={task} key={task.id}/>
                                )}
                            </TaskGroup>
                        )}
                    </TasksContainer>
                </Content>
            </Page>
        </>
    )
}


export default WhichTask