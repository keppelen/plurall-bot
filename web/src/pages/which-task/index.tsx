import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { useLocation, useParams } from 'react-router-dom'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import { Page, SelectedBookTitle, SelectedBook, TasksContainer, TaskGroup} from './styles'
import Task from './task'

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
                        <Task/>
                    </TaskGroup>

                    <TaskGroup>
                    </TaskGroup>

                </TasksContainer>
            </Content>
        </Page>
    )
}


export default WhichTask