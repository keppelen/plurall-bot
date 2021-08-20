import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const SelectedBookTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    font-family: 'Open Sans', sans-serif;
    color: #4a4a4a;
    font-weight: bold;
    font-size: 15px;
    line-height: 24px;
    margin-left: 7px;
`

export const SelectedBook = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100&display=swap');
    font-family: 'Open Sans', sans-serif;
    color: #4a4a4a;
    font-size: 15px;
    line-height: 24px;
    margin-left: 10px;
`

export const TasksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
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

