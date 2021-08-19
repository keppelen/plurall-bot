import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosBook } from 'react-icons/io'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/header'
import { Content, Page, ContentHeader, SelectedBookTitle, SelectedBook, OptionsContainer, Option } from './styles'

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
        
                    </Option>
                </OptionsContainer>
            </Content>
        </Page>
    )
}


export default HowToSolve