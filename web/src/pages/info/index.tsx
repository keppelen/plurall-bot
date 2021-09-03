import React from "react"
import { InfoContainer, InfoText, InfoTitle, Page } from "./styles"


const Info:React.FC = () => {

    return (
        <Page>
            <InfoContainer>
                <InfoTitle> O que é?</InfoTitle>
                <InfoText> Plurallbot é uma plataforma que resolve sua tarefa do plurall! Basta entrar com sua conta do plurall em nossa págia de login, escolher a tarefa ou apostila que deseja que o nosso robô resolva, e <strong>TCHARAM!</strong> Tarefa resolvida.</InfoText>
             </InfoContainer>

            <InfoContainer>
                <InfoTitle> Mas o robô acerta todas as respostas?</InfoTitle>
                <InfoText> Por enquanto não. Porém a chance é muito maior do que apenas chutando livremente, pois nós possuimos um sistema que guarda as respostas certas de usuários anteriores, desse modo, quando mais usuários utilizando a plataforma, maiores são as chances de acerto. </InfoText>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle> Gostei! Como posso ter acesso?</InfoTitle>
                <InfoText> Atualmente possuímos 2 planos, o mensal de R$00,00 e o vitalício de R$00,00. Os pagamentos são efetuado pelo PIX, e assim que aprovado seu acesso à plataforma é liberado. Para efetuar o pagamento e saber mais informações entre em contato: (00) 00000-0000</InfoText>
            </InfoContainer>
            
        </Page>
    )
}


export default Info