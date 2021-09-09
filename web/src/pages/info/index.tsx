import React from "react"
import { InfoContainer, InfoText, InfoTitle, Page } from "./styles"
import ReactPlayer from 'react-player'
import examplevideo from '../../assets/example.mp4'
import { LogoImage } from "../login/styles"
import logoimage from '../../assets/Logo.png'

const Info:React.FC = () => {

    return (
        <Page>
            <LogoImage src={logoimage}/>
            
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
                    controls={false}
                />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>✅ Mas o robô acerta TODAS as respostas?</InfoTitle>
                <InfoText> Por enquanto não. Porém a chance é muito maior do que apenas chutando livremente, pois nós possuimos um sistema que guarda as respostas certas de usuários anteriores, desse modo, quando mais usuários utilizando a plataforma, maiores são as chances de acerto. </InfoText>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>😃 Gostei! Como posso ter acesso?</InfoTitle>
                <InfoText> ⚠️ Em breve, site ainda em construção </InfoText>
                <InfoText> Atualmente possuímos 2 planos, o mensal de <s>R$00,00</s> e o vitalício de <s>R$00,00</s>. Os pagamentos são efetuado pelo PIX, e assim que aprovado seu acesso à plataforma é liberado. Para efetuar o pagamento e saber mais informações entre em contato: <s> (00) 00000-0000 </s></InfoText>
            </InfoContainer>
        </Page>
    )
}


export default Info