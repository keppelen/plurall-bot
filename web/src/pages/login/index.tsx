import React from "react"
import { useState } from "react"
import { Input, LoginButton, LoginContainer, LoginDescription, LoginText, Page } from "./styles"
import ReactLoading from 'react-loading';

const Login:React.FC = () => {
    const [loading,setLoding] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(){
        setLoding(true)
    }

    return (
        <Page>
            <LoginContainer>
                <LoginText> Login </LoginText>
                <LoginDescription> Entre com sua conta do plurall para começar a ilegalidade </LoginDescription>
                
                <Input placeholder='Digite seu email' onChange={v => setEmail(v.target.value)}/>
                <Input placeholder='Digite sua senha' onChange={v => setPassword(v.target.value)}/>
                
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