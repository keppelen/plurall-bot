import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosBook } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import BackButton from '../components/back-button'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import Header from '../components/header'
import { Page, TasksContainer, TaskGroup} from './styles'
import Task, { ITask } from './task'

const exampleTask:ITask = {
    'id': 1,
    'name': 'Tarefa Mínima - Aula 69',
    'official_answer_in_words': 'string',
    'progress': {
        correct: 4,
        wrong: 23, 
        total: 30
    },
    'user_task_id': 10,
    'status_in_words': 'string',
    'status': 'string',
    'end_date': 'string'
}



const WhichTask:React.FC = () => {
    const {id, name} = useParams()

    return (
        <Page>
            <Header title='Selecione a tarefa que deseja resolver:'/>
            <Content>

                <ContentHeader bookname={name} title='Selecione a tarefa desejada'/>

                <TasksContainer>
                    <TaskGroup>
                        <Task task={exampleTask}/>
                    </TaskGroup>

                </TasksContainer>
            </Content>
        </Page>
    )
}


export default WhichTask