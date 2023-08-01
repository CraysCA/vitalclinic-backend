import { Create, Find, Update, Destroy } from '../uses-cases/users/index.js'

const createUser = async (request, response, next) => {
	const { body: data } = request
	try {
		const { email } = data
		const userExist = await Find({ email })
		if (userExist.length > 0) {
			response
				.status(400)
				.json({ success: false, message: 'the email already exist' })
		} else {
			const user = await Create({ data })

			if (user) {
				response
					.status(201)
					.json({ success: true, message: 'user created', user })
			} else {
				response
					.status(422)
					.json({ success: false, message: 'Unprocessable Entity' })
			}
		}
	} catch (error) {
		next(error)
	}
}

const findUser = async (request, response, next) => {
	const { id } = request.params
	try {
		const user = await Find({ id })
		if (user)
			response
				.status(200)
				.json({ success: true, message: 'users listed', user })
	} catch (error) {
		next(error)
	}
}

const updateUser = async (request, response, next) => {
	const { body: data } = request
	const { id } = request.params
	try {
		const user = await Update({ id, data })

		if (user) {
			response
				.status(200)
				.json({ success: true, message: 'user updated', user })
		} else {
			response.status(404).json({ success: false, message: 'fail to update' })
		}
	} catch (error) {
		next(error)
	}
}
const deleteUser = async (request, response, next) => {
	const { id } = request.params
	try {
		const user = await Destroy({ id })

		if (user) {
			response.status(200).json({ success: true, message: 'user deleted' })
		} else {
			response.status(404).json({ success: false, message: 'fail to delete' })
		}
	} catch (error) {
		next(error)
	}
}

export default {
	createUser,
	findUser,
	updateUser,
	deleteUser,
}
