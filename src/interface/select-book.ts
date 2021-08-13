import GetBooks, { IBook } from "../requests/books"
import { numberAnswer } from "../tools/answer"


export async function GetWhichBook(){
    const books:IBook[]|null = await GetBooks()

    if(!books){
        return console.log(`Ocorreu um erro ao buscar apóstilas, tente logar novamente`)
    }

    console.log("Qual apostila deseja resolver?\n")

    printOptions(books)
    
    const bookIndex = numberAnswer('Digite o número da apostila que deseja resolver: ',0,books.length)

    const selectedBook = books[bookIndex]

    return selectedBook
}


function printOptions(books:IBook[]){
    books.forEach(book => {
        console.log(`[${books.indexOf(book)}]  ${book.value}`)
    })
    console.log('\n')
}