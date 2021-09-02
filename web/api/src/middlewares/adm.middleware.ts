import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()


export function admMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader:string|undefined = req.headers.authorization
    const admtoken = process.env.ADM_TOKEN

    if(!authHeader)
        return res.status(401).send({error: 'No token provided'})

    const parts:string[] = authHeader.split(' ')
    
    if(parts.length !== 2)
        return res.status(401).send({error: 'Token error'})

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformated'})

    if(token !== admtoken)
        return res.status(401).send({error: 'Wrong token'})

    req.token = token
    next()
}