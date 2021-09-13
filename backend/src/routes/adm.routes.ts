import {Router} from 'express'
import { addUser, listUsers, removeUser, renewUser } from '../controllers/adm-controller'
import { admMiddleware } from '../middlewares/adm.middleware'

const admroutes:Router = Router()

admroutes.use(admMiddleware)

admroutes.post('/users/add', addUser)
admroutes.post('/users/delete', removeUser)
admroutes.get('/users/list', listUsers)
admroutes.post('/users/renew', renewUser)



export default admroutes