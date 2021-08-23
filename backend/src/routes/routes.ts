import {Router} from 'express'
import { add, list } from '../controllers/answer-controller'
import { booklist, login, tasklist } from '../controllers/controller'
import { tokenMiddleware } from '../middlewares/token.middleware'

const routes:Router = Router()

routes.post('/answer/add/:book/:group/:question', add)
routes.get('/answer/list/:book', list)


routes.post('/login', login)

routes.use(tokenMiddleware)

routes.get('/book/list', booklist)
routes.get('/task/list/:bookid', tasklist)



export default routes