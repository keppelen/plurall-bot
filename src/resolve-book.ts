import { IBook } from "./requests/books";
import GetTasks from "./requests/task-from-books";


export async function SolveBook(book:IBook, option='all'){
    console.log(`Resolvendo apostila: ${book.value}`)
    console.log(`Método: ${option}`)

    const tasks = GetTasks(book.id)
    console.log(tasks)
    
}