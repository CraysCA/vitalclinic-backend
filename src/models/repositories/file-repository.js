import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { file: fileService } = models

const create = async ({ data }) => {
	try {
		return await fileService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id, userId, date }) => {
	const conditions = { id: { [Op.not]: null } }

	if (id) conditions.id = id
	if (userId) conditions.userId = userId

	try {
		return await fileService.findAll({
			where: conditions,
		})
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const user = await fileService.update(data, { where: { id } })
		if (user[0]) return fileService.findOne({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await fileService.destroy({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const getFile = async ({ id }) => {
	try {
		return await fileService.findOne({
			where: { id },
		})
	} catch (error) {
		throw new Error(error)
	}
}

export default { create, find, update, destroy, getFile }
