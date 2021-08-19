import styled from 'styled-components'

export const Page = styled.div`
    margin: 0;
    padding: 0;
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 517px;
    height: 345px;
    background-color: #7229e6;
    border-radius: 20px;
    justify-content: center;
`
export const LoginText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    text-align: left;
    color: #fff;
    margin: 10px;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Public Sans', sans-serif;
`

export const LoginDescription = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    text-align: left;
    color: #fff;
    margin: 10px;
    font-size: 14px;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
`

export const LoginButton = styled.button`
    height: 40px;
    width: 90%;
    background-color: #ff6600;
    border: none;
    border-radius: 20px;
`