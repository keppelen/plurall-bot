import React from 'react'
import { Container, Content, Image, Data, Text } from './styles'


const Book:React.FC = () => {


    return (
        <Container>
            <Content>
                <Image src="https://app.plurall.net/sites/default/files/didactic_material/thumbnails/2786203_thumbnail.png"/>
                <Data>
                    <Text> Terceirão Alfa - Caderno aluno 7 </Text>
                </Data>
            </Content>
        </Container>
    )
}


export default Book