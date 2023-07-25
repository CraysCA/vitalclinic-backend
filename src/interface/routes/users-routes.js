import { Router } from 'express'
import { validationHandler as validate } from '../middlewares/index.js'
import { userSchema } from '../middlewares/schemas/index.js'
import { usersController } from '../../controller/index.js'

const router = Router()

router.post('/', validate(userSchema.create), (req, res) => {
	res.status(200).json({ message: 'ok', data: req.body })
})

//usersController.findUser)

// router.post(
// 	'/',
// 	//	validationHandler(userSchema.create),
// 	usersController.createUser,
// )

// router.put(
// 	'/:id',
// 	// authorization,
// 	// validationHandler(usersSchema.update)
// 	usersController.updateUser,
// )

// router.delete('/:id', usersController.deleteUser)

export default router
