import { Router } from 'express'
import { authorization } from '../middlewares/index.js'

const router = Router()

import users from './users-routes.js'
import auth from './auth-routes.js'

router.use('/users', authorization, users)
router.use('/auth', auth)

export default router
