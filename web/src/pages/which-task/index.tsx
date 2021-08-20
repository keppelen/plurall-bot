import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/header'
import { Content, Page, ContentHeader, SelectedBookTitle, SelectedBook, OptionsContainer, Option, OptionName } from '../which-task/styles'

const WhichTask:React.FC = () => {
    const {id, name} = useParams()

    return (
        <Page>
            <Header title='Selecione a tarefa que deseja resolver:'/>
            <Content>
                <ContentHeader>
                    <IconContext.Provider value={{ color: "#847FBC", size: '25'}}> <IoIosBook/> </IconContext.Provider>
                    <SelectedBookTitle> Apostila selecionada: </SelectedBookTitle> 
                    <SelectedBook> {name} </SelectedBook> 
                </ContentHeader>

                <OptionsContainer>

                </OptionsContainer>
            </Content>
        </Page>
    )
}


export default WhichTask