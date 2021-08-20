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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    & :hover {
        opacity: 0.9;
    }
`

export const ContentHeader = styled.div`
    height: fit-content;
    width: 50%;
    display: flex;
    margin-top: 100px;
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

export const OptionsContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
`

export const Option = styled.div`
    padding: 10px;
    display: flex;
    width: 530px;
    height: 140px;
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
`