import { NextFunction, Request, Response } from 'express'


export function tokenMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader:string|undefined = req.headers.authorization

    if(!authHeader)
        return res.status(401).send({error: 'No token provided'})

    const parts:string[] = authHeader.split(' ')
    
    if(parts.length !== 2)
        return res.status(401).send({error: 'Token error'})

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformated'})

    req.token = token
    next()
}