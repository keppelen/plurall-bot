import React from 'react'
import { AdmText, Page } from './styles'


const NoToken:React.FC = () => {

    return (
        <Page>
            <AdmText style={{color: '#fff'}}> Você não possui acesso :/</AdmText>
        </Page>
    )
}

export default NoToken