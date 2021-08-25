import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaCheck, FaFile, FaTimes } from 'react-icons/fa'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
    correct: number
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

const Solving:React.FC = () => {
    const query = useQuery()
    const totalstr = query.get('total')

    let total = 10  
    if(totalstr)
        total = parseInt(totalstr) ? parseInt(totalstr) : 20

    const {bookid, bookname, taskid, taskname} = useParams()
    const [finished, setFinished] = useState(false)
    const [solving, setSolving] = useState(false)
    const [taskData, setTaskData] = useState<ItaskData>({wrong: 0, correct: 0})
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
            taskData.correct = total
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
                    <IconContext.Provider value={{ color: '#fff'}}>
                        {taskData.correct > 0 && 
                            <TaskProgressBarProgress color='green' percent={(taskData.correct / total * 100)}>
                                <FaCheck/>
                                <TaskProgressbarNumber> {taskData.correct} </TaskProgressbarNumber>
                            </TaskProgressBarProgress>
                        }

                        {taskData.wrong > 0 && 
                            <TaskProgressBarProgress color='red' percent={(taskData.wrong / total * 100)}>
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
                {finished && <FinishedTaskText> <FaCheck/> {solveAll ? 'Parte da apostila' : 'Tarefa'} Concluída </FinishedTaskText>}

            </Content>
        </Page>
    )

}

export default Solving