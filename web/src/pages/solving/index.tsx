import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { FaFile } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import { ContentHeader2 } from '../components/content-header/styles'
import Header from '../components/header'
import { SelectedBookTitle, SelectedBook } from '../components/content-header/styles'
import { Page } from '../dashboard/styles'
import { TaskContainer, TaskName, TaskProgressBar, TaskProgressBarProgress } from '../which-task/task/styles'
import { Cancel, Solve } from '../../bot/main'
import { StartButton, StopButton } from './styles'

const Solving:React.FC = () => {
    const {bookid, bookname, taskid, taskname} = useParams()
    const [percent, setPercent] = useState(0)
    const [solving, setSolving] = useState(false)
    const [solved, setSolved] = useState(false)
    const solveAll = taskid === '0' ? true : false

    const option = solveAll ? 'all' : 'one'

    async function StartSolve(){
        setSolving(true)
        Cancel(false)
        await Solve(bookid, option, taskid)
        setSolving(false)
        setSolved(true)
    }

    function SetCancel(){
        Cancel()
    }


    return (
        <Page>
            <Header title='Aguarde, a tarefa está sendo resolvida...'/>
            <Content>

                <ContentHeader bookname={bookname} title={solving ? 'Resolvendo...' : 'Clique no botão para começar'}/>

                {!solveAll && <ContentHeader2 style={{marginTop: '10px'}}>
                    <IconContext.Provider value={{ color: "#847FBC", size: '20'}}> <FaFile/> </IconContext.Provider>
                    <SelectedBookTitle> Tarefa Selecionada: </SelectedBookTitle> 
                    <SelectedBook> {taskname} </SelectedBook> 
                </ContentHeader2> }

                <TaskContainer style={{marginTop: '15%'}}>
                    <TaskName> {solving ? 'Resolvendo...' : 'Clique no botão para começar'} </TaskName>

                <TaskProgressBar>
                    <TaskProgressBarProgress color='green' percent={percent}/>
                </TaskProgressBar>
                </TaskContainer>

                {!solving && <StartButton onClick={() => {StartSolve()}}> Resolver </StartButton>}
                {solving && <StopButton onClick={() => {SetCancel()}}> Parar </StopButton>}

            </Content>
        </Page>
    )

}

export default Solving