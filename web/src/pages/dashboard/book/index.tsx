import React from 'react'
import { IBook } from '..'
import { Container, Content, Image, Data, Text } from './styles'

interface BookProps {
    book:IBook
}

function Book(props:BookProps){
    const book:IBook = props.book


    return (
        <Container>
            <Content>
                <Image src={book.thumbnail}/>
                <Data>
                    <Text> {book.value} </Text>
                </Data>
            </Content>
        </Container>
    )
}


export default Book