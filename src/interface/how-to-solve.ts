import { IBook } from "../books";
import { numberAnswer } from "../tools/answer";
import Clean from "../tools/clear";


export async function HowToSolve(book:IBook) {
    Clean()
    console.log(`| Apostila ${book.value} |`)
    console.log('\nSelecione o que deseja fazer com a postila:')
    console.log('\n[0] - Resolver toda a postila do zero até completar')
    console.log('\n[1] - Resolver a partir de determinada tarefa')
    console.log('\n[2] - Resolver apenas uma tarefa específica')
    console.log('\n')

    const answer = numberAnswer('Digite o que deseja fazer: ', 0,2)

    switch(answer){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
    
}