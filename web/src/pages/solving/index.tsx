import React from 'react'
import { IconContext } from 'react-icons'
import { FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import BackButton from '../components/back-button'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import { ContentData1, ContentHeader1, ContentTitle1, Description1 } from '../dashboard/styles'
import { SelectedBookTitle } from '../how-to-solve/styles'
import { Page, SelectedBook } from '../which-task/styles'
import { TaskContainer, TaskName, TaskProgressBar, TaskProgressBarProgress } from '../which-task/task/styles'


const Solving:React.FC = () => {
    const {bookid, bookname, taskid, taskname} = useParams()

    return (
        <Page>
            <Header title='Aguarde, a tarefa está sendo resolvida...'/>
            <Content>

                <ContentHeader1>
                    <BackButton/>
                    <ContentData1>
                        <Description1> Aula dada, aula feita de maneira mais eficiente :D </Description1>
                        <ContentTitle1> Resolvendo tarefa... </ContentTitle1>
                    </ContentData1>
                </ContentHeader1>


                <ContentHeader>
                    <IconContext.Provider value={{ color: "#847FBC", size: '25'}}> <IoIosBook/> </IconContext.Provider>
                    <SelectedBookTitle> Apostila selecionada: </SelectedBookTitle> 
                    <SelectedBook> {bookname} </SelectedBook> 
                </ContentHeader>
                <ContentHeader style={{marginTop: '5px'}}>
                    <IconContext.Provider value={{ color: "#847FBC", size: '20'}}> <FaFile/> </IconContext.Provider>
                    <SelectedBookTitle> Tarefa Selecionada: </SelectedBookTitle> 
                    <SelectedBook> {taskname} </SelectedBook> 
                </ContentHeader>

                <TaskContainer style={{marginTop: '50px'}}>
                    <TaskName> Resolvendo.. </TaskName>

                <TaskProgressBar>
                    <TaskProgressBarProgress color='green' percent={80}/>
                </TaskProgressBar>
                </TaskContainer>

            </Content>
        </Page>
    )

}

export default Solving