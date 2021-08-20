import React from 'react'
import { Link } from 'react-router-dom'
import { IBook } from '..'
import { Container, Content, Image, Data, Text } from './styles'

interface BookProps {
    book:IBook
}

function Book(props:BookProps){
    const book:IBook = props.book


    return (
        <Container>
            <Link to={`/dashboard/how/${book.id}/${book.value}`} style={{ textDecoration: 'none' }}>
                <Content>
                    <Image src={book.thumbnail}/>
                    <Data>
                        <Text> {book.value} </Text>
                    </Data>
                </Content>
            </Link>
        </Container>
    )
}


export default Book