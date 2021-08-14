import {Router} from 'express'
import { test } from '../controllers/controller'

const routes:Router = Router()

routes.get('/test', test)


export default routes