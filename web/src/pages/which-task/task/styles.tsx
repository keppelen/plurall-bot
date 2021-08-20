import styled from 'styled-components'

interface ProgressBarProps {
    color: string,
    percent: number
}

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
    height: 90px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 3px #cdc6c6;
    cursor: pointer;
    padding: 15px;
`

export const TaskName = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #4a4a4a;
    width: 100%;
    margin-top: 10px;
`

export const TaskProgressBar = styled.div`    
    display: flex;
    height: 25px;
    background: #e2e2e2;
    border-radius: 20px;
    position: relative;
    margin-top: 10px;
    align-items: center;
`
export const TaskProgressBarProgress = styled('div')<ProgressBarProps>`   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    height: 25px;
    height: 25px;
    border-radius: 20px;
    position: relative;
    background: ${props => props.color === 'green' ? '#1abc9c' : '#ff645f'} none repeat scroll 0% 0%;
    width: ${props => props.percent ? props.percent : 0}%;
`

export const TaskProgressBar0 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    height: 25px;
    border-radius: 20px;
    position: relative;
    background: #655aa3 none repeat scroll 0% 0%;
    width: 3%;
`

export const TaskProgressbarNumber = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`