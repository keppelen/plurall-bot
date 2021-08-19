import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 64px;
    top: 0;
    box-shadow: rgba(38, 41, 48, 0.1) 0px 2px 0px 0px;
    align-items: center;
    justify-content: center;
`
export const HeaderContent = styled.div`
    display: flex;
    width: 60%;
    height: 60%;
    align-items: center;
    justify-content: space-between;
`

export const HeaderTitle = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    color: #c099ff;
    /* font-size: 34px; */
    font-size: 3vh;
    font-size-adjust: 0.3px;
`

export const HeaderLeaveButton = styled.button`       
    @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
    height: 30px;
    width: 60px;
    background-color: #655ca3;
    border: none;
    border-radius: 20px;
    color: #ffff;
    align-items: center;
    justify-content: center;
    cursor: pointer
`