import React from 'react';
import { useState } from 'react';
import { AlertButton, AlertContainer, AlertDescription, AlertPage, AlertPageBackground, AlertTitle } from './styles';

interface AlertBoxProps {
    title:string,
    description:string,
    onPressOk: Function,
    style?:object,
}


export default function AlertBox(props:AlertBoxProps){
    const [show, setShow] = useState(true)

    if(!show)
        return <div/>

    return (
        <AlertPage style={props.style}>
            <AlertPageBackground/>
            <AlertContainer>
                <AlertTitle> {props.title} </AlertTitle>
                <AlertDescription> {props.description} </AlertDescription>

                <AlertButton onClick={() => {setShow(false); props.onPressOk()}}> OK </AlertButton>
            </AlertContainer>
        </AlertPage>
    )

}


export function Leave(){
    localStorage.setItem('token', '')
    localStorage.setItem('email', '')
    window.location.href = '/login'
}