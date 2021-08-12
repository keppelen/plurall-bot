import GetTasks from './task-from-books'
import GetBooks from './books'
import { GetWhichBook } from './interface'

async function Start(){
    await GetWhichBook()
}


Start()