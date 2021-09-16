import {Router} from 'express'
import { list, totalanswers } from '../controllers/answer-controller'
import { booklist, guessQuestion, login, questionlist, tasklist } from '../controllers/controller'
import { tokenMiddleware } from '../middlewares/token.middleware'

const routes:Router = Router()

routes.get('/answer/total', totalanswers)


routes.post('/login', login)

routes.use(tokenMiddleware)

routes.get('/answer/list/:book', list)
routes.get('/book/list', booklist)
routes.get('/task/list/:bookid', tasklist)
routes.get('/questions/list/:taskid', questionlist)
routes.post('/questions/guess/:bookid/:groupid/:questionid', guessQuestion)



export default routes