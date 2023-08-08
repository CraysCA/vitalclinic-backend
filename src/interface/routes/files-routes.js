import { Router } from 'express'
import { filesController } from '../../controller/index.js'

const router = Router()

router.post('/upload', filesController.uploadFile)

export default router
