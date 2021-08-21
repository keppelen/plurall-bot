import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { IoIosBook } from 'react-icons/io'
import { Link, useLocation, useParams } from 'react-router-dom'
import BackButton from '../components/back-button'
import { Content } from '../components/content'
import ContentHeader from '../components/content-header'
import Header from '../components/header'
import {Page, OptionsContainer, Option, OptionName } from './styles'

const HowToSolve:React.FC = () => {
    const {id, name} = useParams()

    return (
        <Page>
            <Header title='Selecione como deseja resolver a apostila'/>
            <Content>
                
                <ContentHeader bookname={name} title='Selecione o método desejado'/>

                <OptionsContainer>
                    <Link to={`/dashboard/solve/${id}/${name}/${0}/${0}`} style={{ textDecoration: 'none' }}>
                        <Option>
                                <IconContext.Provider value={{ color: "#655ca3", size: '60'}}>
                                    <FaBook/>
                                </IconContext.Provider>
                                <OptionName> Resolver apostila inteira </OptionName>
                        </Option>
                    </Link>

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