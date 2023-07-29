import { Op } from 'sequelize'
import { user as userService } from '../db/models/'

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
