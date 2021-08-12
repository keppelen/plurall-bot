import { GetWhichBook } from './interface/select-book'

async function Start(){
    const book = await GetWhichBook()
}


Start()