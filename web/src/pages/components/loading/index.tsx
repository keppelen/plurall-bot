import React from 'react'
import Loading from 'react-loading'


export default function AppLoading(){

    return (
        <div style={{position: 'absolute'}}>
                <Loading type='bubbles' color={'#847FBC'} height={100} width={100}/> 
        </div>
    )
}