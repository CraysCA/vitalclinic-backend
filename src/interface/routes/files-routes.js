import { Router } from 'express'
import { filesController } from '../../controller/index.js'
import { authorization, headerUserValidation } from '../middlewares/index.js'

const router = Router()

router.post(
	'/upload',
	authorization,
	headerUserValidation,
	filesController.uploadFile,
)

router.get('/', authorization, headerUserValidation, filesController.findFiles)

router.get('/:id/download', filesController.downloadFile)

export default router
