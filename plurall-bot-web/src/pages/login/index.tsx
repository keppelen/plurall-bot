import React from "react"
import { LoginButton, LoginContainer, LoginDescription, LoginText, Page } from "./styles"

const Login:React.FC = () => {
    return (
        <Page>
            <LoginContainer>
                <LoginText> Login </LoginText>
                <LoginDescription> Lorem iupson sei la</LoginDescription>
                <LoginButton/>
            </LoginContainer>
        </Page>
    )
}


export default Login