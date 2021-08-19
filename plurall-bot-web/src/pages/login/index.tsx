import React from "react"
import { Input, LoginButton, LoginContainer, LoginDescription, LoginText, Page } from "./styles"

const Login:React.FC = () => {
    return (
        <Page>
            <LoginContainer>
                <LoginText> Login </LoginText>
                <LoginDescription> Entre com sua conta do plurall para começar a ilegalidade </LoginDescription>
                
                <Input placeholder='Digite seu email'/>
                <Input placeholder='Digite sua senha'/>
                
                <LoginButton>
                    Acessar 
                </LoginButton>
            </LoginContainer>
        </Page>
    )
}


export default Login