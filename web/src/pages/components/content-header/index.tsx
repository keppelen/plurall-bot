import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosBook } from 'react-icons/io'
import BackButton from '../back-button'
import { ContentHeader1, ContentData1, Description1, ContentTitle1, ContentHeader2, SelectedBook, SelectedBookTitle} from './styles'

interface ContentHeaderProps {
    bookname: string,
    title: string
}

function ContentHeader(props:ContentHeaderProps){
    const {bookname,title} = props

    return (
        <>
        <ContentHeader1>
            <BackButton/>

            <ContentData1>
                <Description1> Aula dada, aula feita de maneira mais eficiente :D </Description1>
                <ContentTitle1> {title} </ContentTitle1>
            </ContentData1>
        </ContentHeader1>

        <ContentHeader2>
            <IconContext.Provider value={{ color: "#847FBC", size: '25'}}> <IoIosBook/> </IconContext.Provider>
            <SelectedBookTitle> Apostila selecionada: </SelectedBookTitle> 
            <SelectedBook> {bookname} </SelectedBook> 
        </ContentHeader2>
        </>
    )
}

export default ContentHeader