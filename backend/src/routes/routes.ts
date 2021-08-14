import {Router} from 'express'
import { add, list } from '../controllers/controller'

const routes:Router = Router()

routes.post('/add/:book/:group/:question', add)

routes.get('/list/:book', list)

export default routes