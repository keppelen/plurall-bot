import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    background-color: #7229e6;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const AdmContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: fit-content;
    background-color: #fff;
    border-radius: 20px;
    text-align: left;
    padding: 32px;
    box-shadow: 0 1px 3px #cdc6c6;
`
export const AdmText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    color: #262930;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Public Sans', sans-serif;
`

export const AdmTextDate = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    text-align: left;
    color: #262930;
    font-size: 14px;
    margin-top: 10px;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
`

export const AdmDescription = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    text-align: left;
    color: #262930;
    font-size: 14px;
    margin-top: 10px;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
    margin-bottom: 30px;
`

export const AdmButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Public Sans', sans-serif;
    display: flex;
    height: 50px;
    width: 90%;
    background-color: #ff6600;
    border: none;
    border-radius: 20px;
    align-self: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    height: 40px;
    color: #262930;
    border-radius: 8px;
    box-shadow: #e5e7eb 0px 0px 0px 1px inset;
    background: #fafafb none repeat scroll 0% 0%;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    width: calc(100% - 20px);
    outline: currentcolor none medium;
    border: medium none;
    font-family: inherit;
    text-overflow: ellipsis;
    z-index: 1;
    transition: box-shadow 0.5s ease 0s;
    appearance: none;
    align-self: center;
    margin: 5px;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
`

export const AdmItemContainer = styled.div`
    display: flex;
    width: 90%;
    height: fit-content;
    background-color: #fff;
    border-radius: 20px;
    text-align: left;
    padding: 32px;
    box-shadow: 0 1px 3px #cdc6c6;
    align-self: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const AdmItemRemoveButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`

export const AdmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    align-self: center;
    justify-content: center;
`
export const CheckBoxText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    margin-left: 20px;
    margin-right: 20px;
    align-self: center;
    justify-content: center;
    font-weight: bold;
    color: #9e9e9e;
`