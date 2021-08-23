import React from "react"
import { useState } from "react"
import { Input, LoginButton, LoginContainer, LoginDescription, LoginText, Page } from "./styles"
import ReactLoading from 'react-loading'
import axios from "axios"
import env from '../../env.json'
import api from "../../services/api"

const Login:React.FC = () => {
    const [loading,setLoding] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(){
        setLoding(true)
        console.log(email,password)
        const token = await Authenticate(email,password)

        if(!token) return

        localStorage.setItem('token', token)
        setLoding(false)
        window.location.href = '/dashboard'
    }

    async function Authenticate(email:string,password:string) {
        try{
            const response = await api.post('/login', {email,password})
            return response.data.token
        }catch(error){
            alert(error.response.data.error)
            return null
        }
    }

    return (
        <Page>
            <LoginContainer>
                <LoginText> Login </LoginText>
                <LoginDescription> Entre com sua conta do plurall para começar a ilegalidade </LoginDescription>
                
                <Input placeholder='Digite seu email' onChange={v => setEmail(v.target.value)}/>
                <Input placeholder='Digite sua senha' type='password' onChange={v => setPassword(v.target.value)}/>
                
                <LoginButton onClick={() => login()}>
                    {!loading ? 'Acessar' : 
                        <ReactLoading type={'spin'} color={'#fff'} height={'20px'} width={'20px'} />
                    } 
                </LoginButton>
            </LoginContainer>
        </Page>
    )
}


export default Login