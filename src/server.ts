import { GetWhichBook } from './interface/select-book'
import { HowToSolve } from './interface/how-to-solve'

async function Start(){
    const book = await GetWhichBook()
    await HowToSolve(book)
}


Start()