import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api, { authorizaton } from '../../services/api'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import Header from '../components/header'
import { Page, TasksContainer, TaskGroup} from './styles'
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



const WhichTask:React.FC = () => {
    const {id, name} = useParams()
    const [taskGroups, setTaskGroups] = useState<ITaskGroup[]>([])

    useEffect(() => {
        requestTasks()
    },[])

    async function requestTasks(){
        try{
            const response = await api.get(`/task/list/${id}`, authorizaton)
            const taskGroups = response.data
            setTaskGroups(taskGroups)
        }catch{
            alert('Ocorreu um erro ao buscar as tarefas')
        }
    }

    return (
        <Page>
            <Header title='Selecione a tarefa que deseja resolver:'/>
            <Content>

                <ContentHeader bookname={name} title='Selecione a tarefa desejada'/>

                <TasksContainer>
                    {taskGroups.map(taskGroup => (
                        <TaskGroup>
                            {taskGroup.tasks.map(task => (
                                <Task task={task}/>
                            ))}
                        </TaskGroup>
                    ))}
                </TasksContainer>
            </Content>
        </Page>
    )
}


export default WhichTask