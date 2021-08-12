import GetBooks, { IBook } from "./books"
import prompt from 'prompt-sync'

const getAwnser = prompt()


export async function GetWhichBook(){
    const books:IBook[] = await GetBooks()

    console.log("Qual apostila deseja resolver?\n")

    printOptions(books)
    
    console.log('\n')
    
    const bookIndex = getSelectedBookIndex()

    const selectedBook = books[bookIndex]

    return selectedBook
}


function isNumber(n:any) {
    return !isNaN(parseInt(n)) && isFinite(n);
}


function printOptions(books:IBook[]){
    books.forEach(book => {
        console.log(`[${books.indexOf(book)}]  ${book.value}`)
    })
}

function getSelectedBookIndex(){
    let bookIndex:number = -1
    while(bookIndex < 0){
        const awnser = getAwnser('Digite o número da apostila que deseja resolver: ');

        if(isNumber(awnser))
            bookIndex = parseInt(awnser)
    }
    return bookIndex
}