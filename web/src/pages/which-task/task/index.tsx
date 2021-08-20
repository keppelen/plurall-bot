import React from 'react'
import { IconContext } from 'react-icons'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { TaskContainer, TaskName, TaskProgressBar, TaskProgressBar0, TaskProgressbarNumber, TaskProgressBarProgress} from './styles'

interface ITaskProgress {
    correct: number,
    wrong: number, 
    total: number
}

export interface ITask {
    id: number,
    name: string,
    official_answer_in_words: null|string,
    progress: ITaskProgress,
    user_task_id: number,
    status_in_words: string,
    status: string,
    end_date: null|string
}


interface TaskProps {
    task: ITask
}

function Task(props:TaskProps){
    const {task} = props
    const {correct, wrong, total} = task.progress
    const percent = {
        correct: correct / total * 100,
        wrong: wrong / total * 100 
    }

    return (
        <TaskContainer>
            <TaskName> {task.name} </TaskName>
            <TaskProgressBar>
                <IconContext.Provider value={{ color: '#fff'}}>

                    {correct + wrong > 0 ?
                    <>
                        <TaskProgressBarProgress color='green' percent={percent.correct}>
                            <FaCheck/>
                            <TaskProgressbarNumber> {correct} </TaskProgressbarNumber>
                        </TaskProgressBarProgress>

                        <TaskProgressBarProgress color='red' percent={percent.wrong}>
                            <FaTimes/>
                            <TaskProgressbarNumber> {wrong} </TaskProgressbarNumber>
                        </TaskProgressBarProgress>
                    </>
                    :    
                    <TaskProgressBar0>
                        <div/>
                        <TaskProgressbarNumber> 0 </TaskProgressbarNumber>
                    </TaskProgressBar0>
                    }


                </IconContext.Provider>
            </TaskProgressBar>
        </TaskContainer>
    )

}

export default Task


