import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaCheck, FaFile, FaTimes } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import { ContentHeader2 } from '../components/content-header/styles'
import Header from '../components/header'
import { SelectedBookTitle, SelectedBook } from '../components/content-header/styles'
import { Page } from '../dashboard/styles'
import { TaskContainer, TaskName, TaskProgressBar, TaskProgressBar0, TaskProgressbarNumber, TaskProgressBarProgress } from '../which-task/task/styles'
import { Cancel, getTaskData, Solve } from '../../bot/main'
import { FinishedTaskText, StartButton, StopButton } from './styles'
import { useEffect } from 'react'

export interface ItaskData {
    wrong: number,
    correct: number,
    total: number
}

interface IParams {
    bookid: string,
    bookname: string,
    taskid: string,
    taskname: string
}

const Solving:React.FC = () => {
    const {bookid, bookname, taskid, taskname} = useParams<IParams>()
    const [finished, setFinished] = useState(false)
    const [solving, setSolving] = useState(false)
    const [taskData, setTaskData] = useState<ItaskData>({wrong: 0, correct: 0, total: 0})
    const solveAll = taskid === '0' ? true : false

    const option = solveAll ? 'all' : 'one'

    async function StartSolve(){
        setFinished(false)
        Pause(false)
        setSolving(true)

        const isPaused = await Solve(bookid, option, taskid) === 'paused'

        if(!isPaused)
            finish()
        
        setSolving(false)
    }

    function finish(){
        setFinished(true)

        if((taskData.correct + taskData.wrong) <= 0)
            taskData.correct = taskData.total
    }


    useEffect(() => {
        const intervalRef = setInterval(() => {
                UpdateData()
        }, 300)
  
        return () => clearInterval(intervalRef)
    },[])

    function UpdateData(){
        // console.log('atualizadno task data')
        setTaskData(getTaskData())
    }

    function Pause(c=true){
        Cancel(c)
    }

    return (
        <Page>
            <Header title='Aguarde, a tarefa est?? sendo resolvida...'/>
            <Content>

                <ContentHeader bookname={bookname} title={solving ? 'Resolvendo...' : 'Clique no bot??o para come??ar'}/>

                {!solveAll && <ContentHeader2 style={{marginTop: '10px'}}>
                    <IconContext.Provider value={{ color: "#847FBC", size: '20'}}> <FaFile/> </IconContext.Provider>
                    <SelectedBookTitle> Tarefa Selecionada: </SelectedBookTitle> 
                    <SelectedBook> {taskname} </SelectedBook> 
                </ContentHeader2> }

                <TaskContainer style={{marginTop: '15%'}}>
                    <TaskName> {solving ? 'Resolvendo...' : 'Clique no bot??o para come??ar'} </TaskName>

                <TaskProgressBar>
                    <IconContext.Provider value={{ color: '#fff'}}>
                        {taskData.correct > 0 && 
                            <TaskProgressBarProgress color='green' percent={(taskData.correct / taskData.total * 100)}>
                                <FaCheck/>
                                <TaskProgressbarNumber> {taskData.correct} </TaskProgressbarNumber>
                            </TaskProgressBarProgress>
                        }

                        {taskData.wrong > 0 && 
                            <TaskProgressBarProgress color='red' percent={(taskData.wrong / taskData.total * 100)}>
                                <FaTimes/>
                                <TaskProgressbarNumber> {taskData.wrong} </TaskProgressbarNumber>
                            </TaskProgressBarProgress> 
                        }

                        {taskData.correct + taskData.wrong <= 0 &&
                            <TaskProgressBar0>
                                <div/>
                                <TaskProgressbarNumber> 0 </TaskProgressbarNumber>
                            </TaskProgressBar0>
                        }
                    </IconContext.Provider>
                </TaskProgressBar>
                </TaskContainer>

                {!solving && !finished && <StartButton onClick={() => {StartSolve()}}> Resolver </StartButton>}
                {solving  && <StopButton onClick={() => {Pause(true)}}> Parar </StopButton>}
                {finished && <FinishedTaskText> <FaCheck/> {solveAll ? 'PARTE da apostila' : 'Tarefa'} Conclu??da </FinishedTaskText>}
                {finished && solveAll && <FinishedTaskText style={{fontSize: '9px', fontWeight: 'normal', textAlign: 'center'}}> (O rob?? resolveu um peda??o da apostila, para certificar que voc?? n??o possui mais tarefas para serem resolvidas, tente voltar e iniciar o processo novamente) </FinishedTaskText>}
            
            </Content>
        </Page>
    )

}

export default Solving