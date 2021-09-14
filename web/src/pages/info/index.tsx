import React from "react"
import { InfoContainer, InfoText, InfoTitle, Page } from "./styles"
import ReactPlayer from 'react-player'
import examplevideo from '../../assets/example.mp4'
import { LogoImage } from "../login/styles"
import logoimage from '../../assets/Logo.png'
import { FaDiscord } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"

const Info:React.FC = () => {

    return (
        <Page>
            <Link to='/'>
                <LogoImage src={logoimage}/>
            </Link>
            
            <InfoContainer>
                <InfoTitle>❓ O que é?</InfoTitle>
                <InfoText> Plurallbot é uma plataforma que resolve sua tarefa do plurall! Basta entrar com sua conta do plurall em nossa págia de login, escolher a apostila e/ou tarefa que deseja que o nosso robô resolva, e <strong>TCHARAM!</strong> Tarefa resolvida.</InfoText>
                <InfoText> Segue a baixo um exemplo do site em funcionamento:</InfoText>
                <ReactPlayer
                    url={examplevideo}
                    width='100%'
                    height='100%'
                    playing={true}
                    loop={true}
                    controls={true}
                    volume={0}
                />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>✅ Mas o robô acerta TODAS as respostas?</InfoTitle>
                <InfoText> Por enquanto não. Porém a chance é muito maior do que apenas chutando livremente, pois nós possuimos um sistema que guarda as respostas certas de usuários anteriores, desse modo, quanto mais usuários utilizando a plataforma, maiores são as chances de acerto. </InfoText>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>😃 Gostei! Como posso ter acesso?</InfoTitle>
                <InfoText> Atualmente possuímos 2 planos, o mensal (30 dias) e o vitalício (para sempre). Os pagamentos são efetuado pelo PIX, e assim que aprovado seu acesso à plataforma é liberado. Para efetuar o pagamento e saber mais informações sobre preço e como funciona, entre em contato:</InfoText>
                <IconContext.Provider value={{ color: '#5662f6'}}>
                    <InfoText href='https://discord.gg/swDRtaqvsb' style={{marginTop: '10px', fontSize: '18px', alignItems: 'center'}}> <FaDiscord/> Discord </InfoText>
                </IconContext.Provider>
            </InfoContainer>
        </Page>
    )
}


export default Info