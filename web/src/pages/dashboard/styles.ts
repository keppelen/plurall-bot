import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 64px;
    top: 0;
    box-shadow: rgba(38, 41, 48, 0.1) 0px 2px 0px 0px;
    align-items: center;
    justify-content: center;
    font-size: 34px;
`
export const HeaderContent = styled.div`
    display: flex;
    width: 60%;
    height: 60%;
    align-items: center;
`

export const HeaderTitle = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    color: #c099ff;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    justify-content: center;
    align-items: center;
`

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85px;
    justify-content: flex-start;
`

export const ContentTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
    letter-spacing: -0.3px;
    color: rgb(101, 92, 163);
`

export const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@200&display=swap');
    font-family: 'Spartan', sans-serif;
    color: #4a4a4a;
    font-size: 13px;    
    font-weight: lighter;
    letter-spacing: -0.3px;
    margin-top: 45px;
`

export const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 65px;
    width: 96%;
    height: 100%;
`

export const BookHeader = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
`

export const UserTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    font-family: 'Open Sans', sans-serif;
    color: #4a4a4a;
    font-weight: bold;
    font-size: 13px;
    line-height: 24px;
    margin-left: 7px;
`

export const UserData = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100&display=swap');
    font-family: 'Open Sans', sans-serif;
    color: #4a4a4a;
    font-size: 13px;
    line-height: 24px;
    margin-left: 10px;
`

export const Books = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
`