import {Router} from 'express'
import { add, list } from '../controllers/controller'

const routes:Router = Router()

routes.post('/answer/add/:book/:group/:question', add)

routes.get('/answer/list/:book', list)



export default routes