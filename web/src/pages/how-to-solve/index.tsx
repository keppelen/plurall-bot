import React from 'react'
import { IconContext } from 'react-icons'
import { FaBook, FaFile } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
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
                    <OptionFullBook id={id} name={name}/>

                    <OptionSingleTask id={id} name={name}/>
                </OptionsContainer>
            </Content>
        </Page>
    )
}

interface OptionProps {
    id: string,
    name: string
}

function OptionFullBook(props:OptionProps){
    return (
        <Option style={{opacity: 0.3, cursor: 'unset'}}>
            <Link to={`/dashboard/solve/${props.id}/${props.name}/${0}/${0}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <IconContext.Provider value={{ color: "#655ca3", size: '60'}}>
                    <FaBook/>
                </IconContext.Provider>
                <OptionName style={{userSelect: 'none'}}> Resolver apostila inteira </OptionName>
            </Link>
        </Option>   
    ) 
}

function OptionSingleTask(props:OptionProps){
    return (
        <Option>
            <Link to={`/dashboard/which-task/${props.id}/${props.name}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center'  }}>
                <IconContext.Provider value={{ color: "#655ca3", size: '60'}}>
                    <FaFile/>
                </IconContext.Provider>
                <OptionName> Resolver apenas uma tarefa </OptionName>
            </Link>
        </Option>
    )
}


export default HowToSolve