import styled from 'styled-components'

export const AlertPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
`

export const AlertPageBackground = styled.div`
    background-color: #000;
    opacity: .5;
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    z-index: 5;
`

export const AlertContainer = styled.div`
    width: 400px;
    @media(max-width: 400px){
        width: 80%;
    }
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    align-items: center;
    padding: 20px;
    opacity: 1;
    z-index: 10;
`

export const AlertTitle = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: bold;
`

export const AlertDescription = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-top: 30px;
`

export const AlertButton = styled.button`
    border: none;
    width: 100px;
    height: 50px;
    background-color: #7229e6;
    color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-top: 70px;
    margin-left: 300px;
    cursor: pointer;
    font-size: 17px;
    @media(max-width: 400px){
        margin-top: 70px;
        margin-left: 200px;
    }
`