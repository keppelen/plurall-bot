import { Request, Response } from "express"

export async function test(req:Request, res:Response){
    try{
        return res.status(200).send({message: 'test'})
    }catch{
        return res.status(400).send({error: 'Erro ao conseguir dados'})
    }
}

export async function add(req:Request, res:Response) {
    try{
        const {answer} = req.body
        const {book, group,question} = req.params

        if(!((group) && (question) && (answer) && (book)))
            return res.status(400).send({error: 'Request malformed'})

        console.log(`\nSalvando questão:`)
        console.log(`Book: ${group}`)
        console.log(`Group: ${group}`)
        console.log(`Question: ${question}`)
        console.log(`Answer: ${answer}`)
        return res.status(200).send()
    }catch{
        return res.status(400).send({error: 'Erro ao adicionar dados'})
    }
}