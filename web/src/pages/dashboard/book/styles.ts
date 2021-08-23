import styled from 'styled-components'

export const Container = styled.div`
    width: min(80vw, 530px);
    height: 140px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    & :hover {
        opacity: 0.9;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`

export const Image = styled.img`
    width: 99px;
    height: 140px;
    border-radius: 10px 0px 0px 10px;
`

export const Data = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

export const Text = styled.p` 
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
    font-family: 'Nunito', sans-serif;
    color: rgb(74, 74, 74);
    font-size: 20px;
    line-height: 24px;
`