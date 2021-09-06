import React, { useState } from 'react'
import { AdmButton, AdmContainer, AdmDescription, AdmText, CheckBoxContainer, CheckBoxText, Input, Page } from './styles'
import ReactLoading from 'react-loading'
import api from '../../services/api'
import AlertBox from '../components/alertbox'
import { useHistory } from 'react-router-dom'
import Switch from "react-switch"

const Admin:React.FC = () =>{
    const [loading, setLoding] = useState(false)
    const history = useHistory()
    const [email, setEmail] = useState('email')
    const [password, setPassword] = useState('password')
    const [vital, setVital] = useState(false)
    const [error,setError] = useState({title:'Ops!',description: '',on: false, function: () => {resetAlert()}})


    if(localStorage.getItem('did') !== 'true')
        return (
            <Page>
                {error.on && 
                    <AlertBox title={error.title} description={error.description} onPressOk={() => {resetAlert()}}/>
                }

                <AdmContainer>
                    <AdmText> Pão de forma </AdmText>
                    <AdmDescription> pão de forma?, bisnaguinha!</AdmDescription>

                <Input placeholder='Digite sua senha' type='password' onChange={v => setPassword(v.target.value)}/>
                    
                <AdmButton onClick={() => CheckPass()} style={{backgroundColor: '#655aa3'}}> {LoadingText('Entrar', loading) }</AdmButton>
                </AdmContainer>
            </Page>
        )

    async function Add() {
        try{
            setLoding(true)
            const response = await api.post(`/adm/users/add`, {email, vital}, {headers:{Authorization: `Bearer ${password}`}})
            console.log(response)

            if(!response.data.message) return
            
            
            setLoding(false)
            return setError({...error, title: 'Sucesso!', description: response.data.message? response.data.message:'Erro inesperado', on: true})
        }catch(error:any){
            setLoding(false)
            if(!error)
                return setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})
            
                if(error.response)
                    setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }

    async function List() {
        try{
            setLoding(true)
            const response = await api.get(`/adm/users/list`, {headers:{Authorization: `Bearer ${password}`}})
            const {data} = response
            setLoding(false)
            history.push('/paodeforma/list', {data})
        }catch(error:any){
            setLoding(false)
            if(!error)
                return setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})
            
                if(error.response)
                    setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }

    async function CheckPass() {
        try{
            const response = await api.get(`/adm/users/list`, {headers:{Authorization: `Bearer ${password}`}})
            const {data} = response

            if(data){
                localStorage.setItem('did', 'true')
                window.location.href = '/paodeforma'
            }
            

        }catch(error:any){
            if(!error)
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})

            if(error.response)
                setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }

    function resetAlert(){
        setError({...error, on: false})
    }

    return (
        <Page>
            
            {error.on && 
                <AlertBox title={error.title} description={error.description} onPressOk={() => {resetAlert()}}/>
            }

            <AdmContainer>
                <AdmText> Pão de forma </AdmText>
                <AdmDescription> pão de forma, pão? de forma!</AdmDescription>

            <Input placeholder='Digite o email' onChange={v => setEmail(v.target.value)}/>
            <Input placeholder='Digite sua senha' type='password' onChange={v => setPassword(v.target.value)}/>
            
            <CheckBoxContainer> 
                <CheckBoxText> 30 Dias </CheckBoxText>
                <Switch onChange={checked => setVital(checked)} checked={vital} onColor='#00b083'/>
                <CheckBoxText> Vitalício </CheckBoxText>
            </CheckBoxContainer>
            <AdmButton onClick={() => Add()} style={{backgroundColor: '#00b083', marginTop: '20px'}} > {LoadingText('Adicionar', loading) }</AdmButton>
            <AdmButton onClick={() => List()} style={{backgroundColor: '#655aa3'}}> {LoadingText('Listar', loading) }</AdmButton>
            </AdmContainer>
        </Page>
    )
}


function LoadingText(text:string, loading:boolean){
    return !loading ? text : <ReactLoading type={'spin'} color={'#fff'} height={'20px'} width={'20px'} />
}

export default Admin