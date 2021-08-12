import GetBooks, { IBook } from "../books"
import { numberAnswer } from "../tools/answer"


export async function GetWhichBook(){
    const books:IBook[] = await GetBooks()

    console.log("Qual apostila deseja resolver?\n")

    printOptions(books)
    
    console.log('\n')
    
    const bookIndex = numberAnswer('Digite o número da apostila que deseja resolver: ',0,books.length)

    const selectedBook = books[bookIndex]

    return selectedBook
}


function printOptions(books:IBook[]){
    books.forEach(book => {
        console.log(`[${books.indexOf(book)}]  ${book.value}`)
    })
}