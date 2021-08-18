import { IBook } from "../requests/books";
import { numberAnswer } from "../tools/answer";
import Clean from "../tools/clear";


export async function HowToSolve(book:IBook) {
    Clean()
    
    printOptions(book)

    const answer = numberAnswer('Digite o que deseja fazer: ', 0, 1)

    switch(answer){
        case 0:
            return 'all'
        case 1:
            return 'one'
        default:
            return 'all'
    }

}


function printOptions(book:IBook){
    console.log(`| Apostila ${book.value} |`)
    console.log('\nSelecione o que deseja fazer com a postila:')
    console.log('\n[0] - Resolver toda a postila do zero até completar')
    console.log('\n[1] - Resolver apenas uma tarefa específica')
    console.log('\n')
}