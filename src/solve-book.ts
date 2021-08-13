import { IBook } from "./requests/books";
import GetTaskGroup, { ITaskGroup } from "./requests/tasks";
import { SolveTaskGroup } from "./solve-task";


export async function SolveBook(book:IBook, option='all'){
    console.log(`Resolvendo apostila: ${book.value}`)
    console.log(`Método: ${option}`)

    const taskGroups:ITaskGroup[] = await GetTaskGroup(book)

    for(let x = 0; x < taskGroups.length; x++){
        await SolveTaskGroup(book,taskGroups[x])
    }

}