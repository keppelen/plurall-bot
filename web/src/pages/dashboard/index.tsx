import React from "react"
import { IconContext } from "react-icons";
import { BookContainer, BookHeader, Books, Content, Page, UserData, UserTitle } from "./styles"
import { FaUserAlt } from 'react-icons/fa';
import Book from "./book";
import Header from "../components/header";
import { ContentData1, ContentHeader1, ContentTitle1, Description1 } from "../components/content-header/styles";
import { useEffect } from "react";
import { useState } from "react";
import api, { authorizaton } from "../../services/api";

export interface IBook {
    id: string,
    value: string,
    thumbnail: string,
    access_status: string,
    status_in_words: string|null,
    available: boolean
}

const Dashboard:React.FC = () => {
    const [books,setBooks] = useState([])

    useEffect(() => {
        requestBooks()
    })

    async function requestBooks(){
        try{
            const response = await api.get('/book/list', authorizaton)
            setBooks(response.data)
        }catch{
            alert('Ocorreu um erro ao buscar as apostilas')
        }
    }


    return (
        <Page>
            <Header title='Selecione a apostila que deseja fazer'/>

            <Content>
                <ContentHeader1>
                    <ContentData1>
                        <Description1> Aula dada, aula feita de maneira mais eficiente :D </Description1>
                        <ContentTitle1> Todos os cadernos </ContentTitle1>
                    </ContentData1>
                </ContentHeader1>

                <BookContainer>
                    <BookHeader>
                        <IconContext.Provider value={{ color: "#847FBC", size: '15'}}> <FaUserAlt/> </IconContext.Provider>
                        <UserTitle> Usuário logado:  </UserTitle>
                        <UserData>  teste@teste.com - dadadadasd</UserData>
                    </BookHeader>

                    <Books>
                        {books.map(book => 
                            <Book book={book}/> 
                        )}
                    </Books>

                </BookContainer>

            </Content>
            
        </Page>
    )
}


export default Dashboard