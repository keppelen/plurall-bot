import { Request, Response } from "express"
import { Model } from "mongoose"
import { IUser, UserModel, userSchema } from "../models/user"

const User:Model<IUser> = UserModel

export async function addUser(req:Request, res:Response) {
    try{
        const {email} = req.body
        const findedUser = await User.findOne({email})

        if(!email)
            return res.status(400).send({error: 'Request malformed'})

        if(findedUser)
            return res.status(400).send({error: 'Usuário ja tem permisssao'})

        await User.create({email})
        
        return res.status(200).send({message: 'Usuário adicionado com sucesso!'})
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

export async function removeUser(req:Request, res:Response) {
    try{
        const {email} = req.body
        const findedUser = await User.findOne({email})

        if(!email)
            return res.status(400).send({error: 'Request malformed'})

        if(!findedUser)
            return res.status(400).send({error: 'Usuário não encontrado'})

        await User.findOneAndRemove({email})
        
        return res.status(200).send({message: 'Usuário removido com sucesso!'})
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}

export async function listUsers(req:Request, res:Response) {
    try{
        const users = await User.find().select('+email').select('+createdAt')
        
        return res.status(200).send(users)
    }catch{
        return res.status(400).send({error: 'Erro ao efetuar login'})
    }
}


export async function checkUser(email:string) {
    try{
        const findedUser = await User.findOne({email})

        if(findedUser)
            return true
        else
            return false
    }catch{
        return false
    }
}