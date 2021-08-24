import React from 'react'
import { useEffect } from 'react'
import { resetTaskData } from '../../../bot/main'
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

    useEffect(() => {
        resetTaskData()
    },[])

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