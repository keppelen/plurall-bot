import React from "react"
import { IconContext } from "react-icons";
import { BookContainer, BookHeader, Books, Content, Page, UserData, UserTitle } from "./styles"
import { FaUserAlt } from 'react-icons/fa';
import Book from "./book";
import Header from "../components/header";
import { ContentData1, ContentHeader1, ContentTitle1, Description1 } from "../components/content-header/styles";

export interface IBook {
    id: string,
    value: string,
    thumbnail: string,
    access_status: string,
    status_in_words: string|null,
    available: boolean
}

const Dashboard:React.FC = () => {

    const books:IBook[] = [
        {
            id: '1',
            value: 'Terceirão alfa - Caderno aluno 7',
            thumbnail: 'https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2786203_thumbnail.png',
            access_status: 'string',
            status_in_words: 'string',
            available: true
        },
        {
            id: '2',
            value: 'Terceirão alfa - Caderno aluno 6',
            thumbnail: 'https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2748190_thumbnail.png',
            access_status: 'string',
            status_in_words: 'string',
            available: true
        },
        {
            id: '3',
            value: 'Terceirão alfa - Caderno aluno 5',
            thumbnail: 'https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2580100_thumbnail.png',
            access_status: 'string',
            status_in_words: 'string',
            available: true
        },
    ]


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