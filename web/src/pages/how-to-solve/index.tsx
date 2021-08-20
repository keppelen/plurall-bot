import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { Link, useLocation, useParams } from 'react-router-dom'
import BackButton from '../components/back-button'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import { ContentData1, ContentHeader1, ContentTitle1, Description1 } from '../dashboard/styles'
import {Page, SelectedBookTitle, SelectedBook, OptionsContainer, Option, OptionName } from './styles'

const HowToSolve:React.FC = () => {
    const {id, name} = useParams()

    return (
        <Page>
            <Header title='Selecione como deseja resolver a apostila'/>
            <Content>
                <ContentHeader1>
                    <BackButton/>
                    <ContentData1>
                        <Description1> Aula dada, aula feita de maneira mais eficiente :D </Description1>
                        <ContentTitle1> Selecione o método desejado </ContentTitle1>
                    </ContentData1>
                </ContentHeader1>

                <ContentHeader>
                    <IconContext.Provider value={{ color: "#847FBC", size: '25'}}> <IoIosBook/> </IconContext.Provider>
                    <SelectedBookTitle> Apostila selecionada: </SelectedBookTitle> 
                    <SelectedBook> {name} </SelectedBook> 
                </ContentHeader>

                <OptionsContainer>
                    <Option>
                            <IconContext.Provider value={{ color: "#655ca3", size: '60'}}>
                                <FaBook/>
                            </IconContext.Provider>
                            <OptionName> Resolver apostila inteira </OptionName>
                    </Option>

                    <Link to={`/dashboard/which-task/${id}/${name}`} style={{ textDecoration: 'none' }}>
                        <Option>
                            <IconContext.Provider value={{ color: "#655ca3", size: '60'}}>
                                <FaFile/>
                            </IconContext.Provider>
                            <OptionName> Resolver apenas uma tarefa </OptionName>
                        </Option>
                    </Link>

                </OptionsContainer>
            </Content>
        </Page>
    )
}


export default HowToSolve