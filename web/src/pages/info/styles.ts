import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #7229e6;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
    padding-top: 130px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: min(80vw, 700px);
    background-color: #fff;
    box-shadow: 0 1px 3px #cdc6c6;
    border-radius: 20px;
    padding: 20px;
    margin-top: 30px;
`

export const InfoTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    color: #262930;
    font-size: 22px;
    font-weight: 700;
    font-family: 'Public Sans', sans-serif;
    margin-bottom: 5px;
`

export const InfoText = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    margin-top: 5px;
    font-size: 16px;
    text-align: left;
    color: #262930;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
    align-items: center;
    justify-content: center;
`