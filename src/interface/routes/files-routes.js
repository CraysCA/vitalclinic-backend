import { Router } from 'express'
import { filesController } from '../../controller/index.js'

const router = Router()

router.post('/upload', filesController.uploadFile)

router.get('/', filesController.findFiles)

router.get('/:id/download', filesController.downloadFile)

export default router
