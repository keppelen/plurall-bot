import React from 'react'
import { HeaderContent, HeaderLeaveButton, HeaderTitle, HeaderContainer } from './styles'

interface HeaderProps {
    title:string
}

function Header(props:HeaderProps){
    return (
        <HeaderContainer> 
            <HeaderContent> 
            <HeaderTitle> {props.title} </HeaderTitle> 
            <HeaderLeaveButton> SAIR </HeaderLeaveButton>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header