import React from "react"
import { useState } from "react"
import { InfoContainer, InfoText, Input, LoginButton, LoginContainer, LoginDescription, LoginText, Page } from "./styles"
import ReactLoading from 'react-loading'
import api from "../../services/api"
import AlertBox from "../components/alertbox"
import { Link } from "react-router-dom"

const Login:React.FC = () => {
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState({title:'',description: '',on: false, function: () => {}})

    async function login(){

        if(email === '' || password === '')
            return setError({title:'Ops!', description: 'Preencha todos os campos!', on: true, function: () => {}})
        
        setLoading(true)
        const token = await Authenticate(email,password)

        setLoading(false)
        if(!token) return

        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        window.location.href = '/dashboard'
    }

    async function Authenticate(email:string,password:string) {
        try{
            const response = await api.post('/login', {email,password})
            return response.data.token
        }catch(error:any){
            if(!error)
                return setError({title:'Ops!', description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true, function: () => {}})
            if(error.response)
                setError({title:'Ops!', description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true, function: () => {}})
            else
                setError({title:'Ops!', description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true, function: () => {}})
        }
    }

    function resetAlert(){
        setError({...error, on: false})
    }

    return (
        <Page>
            {error.on && 
                <AlertBox title={error.title} description={error.description} onPressOk={() => {resetAlert();error.function()}}/>
            }
            <LoginContainer>
                <LoginText> Login </LoginText>
                <LoginDescription> Entre com sua conta do plurall para começar </LoginDescription>
                
                <Input placeholder='Digite seu email' onChange={v => setEmail(v.target.value)}/>
                <Input placeholder='Digite sua senha' type='password' onChange={v => setPassword(v.target.value)}/>
                
                <LoginButton onClick={() => login()}>
                    {!loading ? 'Acessar' : 
                        <ReactLoading type={'spin'} color={'#fff'} height={'20px'} width={'20px'} />
                    } 
                </LoginButton>
            </LoginContainer>
            
            <InfoContainer> 
                <InfoText> Não possui acesso? </InfoText>
                <Link to='/info'> <InfoText style={{textDecoration: 'underline', fontWeight: 'bold'}}> Clique aqui </InfoText> </Link> 
                <InfoText> para saber mais informações :D</InfoText>
            </InfoContainer>
        </Page>
    )
}


export default Login