import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 64px;
    position: absolute;
    top: 0;
    box-shadow: rgba(38, 41, 48, 0.1) 0px 2px 0px 0px;
    align-items: center;
    justify-content: center;
`
export const HeaderContent = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
`

export const HeaderTitle = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    color: #c099ff;
    /* font-size: 34px; */
    font-size: min(4vw, 25px);
`

export const HeaderLeaveButton = styled.button`       
    @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
    font-size: min(2.5vw, 13px);
    height: 30px;
    width: min(20vw, 60px);
    background-color: #655ca3;
    border: none;
    border-radius: 20px;
    color: #ffff;
    align-items: center;
    justify-content: center;
    cursor: pointer
`