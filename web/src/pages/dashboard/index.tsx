import React from "react"
import { IconContext } from "react-icons";
import { BookContainer, BookHeader, Books, Content, ContentHeader, ContentTitle, Description, Header, HeaderContent, HeaderLeaveButton, HeaderTitle, Page, UserData, UserTitle } from "./styles"
import { FaUserAlt } from 'react-icons/fa';
import Book from "./book";

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
            value: 'Terceirão alfa - Caderno aluno 1',
            thumbnail: 'https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2786203_thumbnail.png',
            access_status: 'string',
            status_in_words: 'string',
            available: true
        },
        {
            id: '2',
            value: 'Terceirão alfa - Caderno aluno 2',
            thumbnail: 'https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2786203_thumbnail.png',
            access_status: 'string',
            status_in_words: 'string',
            available: true
        },
    ]


    return (
        <Page>
            <Header> 
                 <HeaderContent> 
                    <HeaderTitle> Selecione a apostila que deseja fazer </HeaderTitle> 
                    <HeaderLeaveButton> SAIR </HeaderLeaveButton>
                 </HeaderContent>
            </Header>

            <Content>
                <ContentHeader>
                    <Description> Aula dada, aula feita de maneira mais eficiente :D </Description>
                    <ContentTitle> Todos os cadernos </ContentTitle>
                </ContentHeader>

                <BookContainer>
                    <BookHeader>
                        <IconContext.Provider value={{ color: "#847FBC", size: '15'}}> <FaUserAlt/> </IconContext.Provider>
                        <UserTitle> Usuário logado:  </UserTitle>
                        <UserData>  teste@teste.com - dadadadasd</UserData>
                    </BookHeader>

                    <Books>
                        {books.map(book => <Book book={book}/>)}
                    </Books>

                </BookContainer>

            </Content>
            
        </Page>
    )
}


export default Dashboard