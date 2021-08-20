import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosBook } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import BackButton from '../components/back-button'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import { ContentData1, ContentHeader1, ContentTitle1, Description1 } from '../dashboard/styles'
import { Page, SelectedBookTitle, SelectedBook, TasksContainer, TaskGroup} from './styles'
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

                <ContentHeader1>
                    <BackButton/>
                    <ContentData1>
                        <Description1> Aula dada, aula feita de maneira mais eficiente :D </Description1>
                        <ContentTitle1> Selecione a tarefa que deseja resolver </ContentTitle1>
                    </ContentData1>
                </ContentHeader1>


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