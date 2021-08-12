import { GetWhichBook } from './interface/select-book'
import { HowToSolve } from './interface/how-to-solve'
import { SolveBook } from './solve-book'
import { GetQuestions } from './requests/questions'

async function Start(){
    const book = await GetWhichBook()
    const how = await HowToSolve(book)
    await SolveBook(book,how)
}


Start()