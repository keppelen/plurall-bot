import { GetWhichBook } from './interface/select-book'
import { HowToSolve } from './interface/how-to-solve'
import { SolveBook } from './solve-book'
import { Login } from './interface/login'

async function Start(){
    const logged = await Login()
    if(!logged) return

    const book = await GetWhichBook()
    if(!book) return
    
    const how = await HowToSolve(book)
    await SolveBook(book,how)
}


Start()