import { Request, Response } from "express"

export async function test(req:Request, res:Response){
    try{
        return res.status(200).send({message: 'test'})
    }catch{
        return res.status(400).send({error: 'Erro ao conseguir dados'})
    }
}