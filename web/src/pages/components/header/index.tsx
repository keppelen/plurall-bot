import React from 'react'
import { HeaderContent, HeaderLeaveButton, HeaderTitle, HeaderContainer } from './styles'

interface HeaderProps {
    title:string
}

function Header(props:HeaderProps){

    function Leave(){
        localStorage.setItem('token', '')
        localStorage.setItem('email', '')
        window.location.href = '/login'
    }

    return (
        <HeaderContainer> 
            <HeaderContent> 
                <HeaderTitle> {props.title} </HeaderTitle> 
                <HeaderLeaveButton onClick={() => {Leave()}}> SAIR </HeaderLeaveButton>
                </HeaderContent>
        </HeaderContainer>
    )
}

export default Header