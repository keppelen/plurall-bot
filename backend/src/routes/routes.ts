import {Router} from 'express'
import { add, list } from '../controllers/answer-controller'
import { login } from '../controllers/controller'

const routes:Router = Router()

routes.post('/answer/add/:book/:group/:question', add)
routes.get('/answer/list/:book', list)


routes.post('/login', login)
// routes.get('/book/list', )



export default routes