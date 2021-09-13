import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.TOKEN_SECRET || ''

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

    jwt.verify(token, secret, (err, decoded) => {
        if(err)
            return res.status(401).send({error: 'Invalid token'})

        req.email = decoded?.email
        req.pluralltoken = decoded?.pluralltoken
    })

    req.token = token
    next()
}