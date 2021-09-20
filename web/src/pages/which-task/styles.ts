import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #fafafa; 
    width: 100%;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: flex-start;
`

export const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TaskGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-top: 30px;
    margin-bottom: 20px;
`

export const NoTaskText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
    font-family: 'Open Sans', sans-serif;
    margin-top: 25%;
    font-size: 20px;
    text-align: center;
`

