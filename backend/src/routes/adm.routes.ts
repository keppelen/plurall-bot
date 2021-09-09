import {Router} from 'express'
import { addUser, listUsers, removeUser, renewUser } from '../controllers/adm-controller'
import { admMiddleware } from '../middlewares/adm.middleware'

const admroutes:Router = Router()

admroutes.use(admMiddleware)

admroutes.post('/adm/users/add', addUser)
admroutes.post('/adm/users/delete', removeUser)
admroutes.get('/adm/users/list', listUsers)
admroutes.post('/adm/users/renew', renewUser)



export default admroutes