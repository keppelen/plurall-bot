import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { useLocation, useParams } from 'react-router-dom'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import { Page, SelectedBookTitle, SelectedBook, TasksContainer, TaskGroup} from './styles'
import Task, { ITask } from './task'

const exampleTask:ITask = {
    'id': 1,
    'name': 'Tarefa Mínima - Aula 69',
    'official_answer_in_words': 'string',
    'progress': {
        correct: 0,
        wrong: 0, 
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
                <ContentHeader>
                    <IconContext.Provider value={{ color: "#847FBC", size: '25'}}> <IoIosBook/> </IconContext.Provider>
                    <SelectedBookTitle> Apostila selecionada: </SelectedBookTitle> 
                    <SelectedBook> {name} </SelectedBook> 
                </ContentHeader>

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