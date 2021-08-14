import {Router} from 'express'
import { add, test } from '../controllers/controller'

const routes:Router = Router()

routes.get('/test', test)

routes.post('/add/:group/:question', add)

export default routes