import { create, find, update, destroy } from '../uses-cases/users/index.js'

const createUser = async (request, response, next) => {
	const { body: data } = request
	try {
		const user = await create({ data })

		if (user) {
			response
				.status(201)
				.json({ success: true, message: 'user created', user })
		} else {
			response
				.status(422)
				.json({ success: false, message: 'Unprocessable Entity' })
		}
	} catch (error) {
		next(error)
	}
}

const findUser = async (request, response, next) => {
	const { id } = request.params
	try {
		const user = await find({ id })
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
		const user = await update({ id, data })

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
		const user = await destroy({ id })

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
