import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { user: userService } = models

// export default class userRepository {
// 	constructor() {
// 		this.userService = userService
// 	}

// 	async create({ data }) {
// 		try {
// 			return await userService.create(data)
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	}

// 	async find({ id }) {
// 		const conditions = { id: id || { [Op.not]: null } }
// 		try {
// 			return await userService.findAll({ where: conditions })
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	}

// 	async update({ id, data }) {
// 		try {
// 			const user = await userService.update(data, { where: { id } })
// 			if (user[0]) return userService.findOne({ where: { id } })
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	}

// 	async destroy({ id }) {
// 		try {
// 			return await userService.destroy({ where: { id } })
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	}
// }

const create = async ({ data }) => {
	try {
		return await userService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id }) => {
	const conditions = { id: id || { [Op.not]: null } }
	try {
		return await userService.findAll({ where: conditions })
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const user = await userService.update(data, { where: { id } })
		if (user[0]) return userService.findOne({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await userService.destroy({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

export default { create, find, update, destroy }
