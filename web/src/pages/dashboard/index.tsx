import React from "react"
import { IconContext } from "react-icons";
import { BookContainer, BookHeader, Books, Content, ContentHeader, ContentTitle, Description, Header, HeaderContent, HeaderTitle, Page, UserData, UserTitle } from "./styles"
import { FaUserAlt } from 'react-icons/fa';
import Book from "./book";

const Dashboard:React.FC = () => {
    return (
        <Page>
            <Header> 
                 <HeaderContent> 
                    <HeaderTitle> Selecione a apostila que deseja fazer </HeaderTitle> 
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
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                    </Books>

                </BookContainer>

            </Content>
            
        </Page>
    )
}


export default Dashboard