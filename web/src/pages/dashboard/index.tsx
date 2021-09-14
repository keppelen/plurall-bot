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
import AlertBox, { Leave } from "../components/alertbox";
import AppLoading from "../components/loading";

export interface IBook {
    id: string,
    value: string,
    thumbnail: string,
    access_status: string,
    status_in_words: string|null,
    available: boolean
}

const Dashboard:React.FC = () => {
    const [books,setBooks] = useState<IBook[]>([])
    const [error,setError] = useState({title:'',description: '',on: false, function: () => {}})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        requestBooks()
    },[])

    async function requestBooks(){
        try{
            const response = await api.get('/book/list', authorizaton)
            setBooks(response.data)
        }catch(err:any){
            if(!err) 
                return setError({title:'Ops!', description: 'Ocorreu um erro inesperado, tente novamente mais tarde :/',on: true, function: () => {}})

            if(err.response)
                setError({title:'Ops!', description: err.response.data.error || 'Ocorreu um erro com os servidores do plurall, tente logar novamente :)',on: true, function: () => {Leave()}})
            else
                setError({title:'Ops!', description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true, function: () => {}})
        }
        setLoading(false)
    }
    
    
    return (
        <Page>
            {loading && <AppLoading/>}

            {error.on && 
                <AlertBox title={error.title} description={error.description} onPressOk={() => {error.function()}}/>
            }

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
                        <UserData>  {localStorage.getItem('email')}</UserData>
                    </BookHeader>

                    
                    <Books>
                        {books.map(book => 
                            <Book book={book} key={book.id}/> 
                        )}
                    </Books>

                </BookContainer>

            </Content>
            
        </Page>
    )
}


export default Dashboard