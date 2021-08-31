import {Router} from 'express'
import { addUser, listUsers, removeUser } from '../controllers/adm-controller'
import { admMiddleware } from '../middlewares/adm.middleware'

const admroutes:Router = Router()

admroutes.use(admMiddleware)

admroutes.post('/users/add', addUser)
admroutes.delete('/users/delete', removeUser)
admroutes.get('/users/list', listUsers)



export default admroutes