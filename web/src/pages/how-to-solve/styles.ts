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

export const OptionsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
`

export const Option = styled.div`
    display: flex;
    width: min(80vw, 530px);
    height: 140px;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    align-items: center;
`
export const OptionName = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin-left: 30px;
    color: rgb(74, 74, 74);
`