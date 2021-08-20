import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Content, ContentHeader } from '../components/content'
import Header from '../components/header'
import {Page, SelectedBookTitle, SelectedBook, OptionsContainer, Option, OptionName } from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const HowToSolve:React.FC = () => {
    const {id, name} = useParams()
    const query = useQuery()
    console.log(query)

    return (
        <Page>
            <Header title='Selecione como deseja resolver a apostila'/>
            <Content>
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