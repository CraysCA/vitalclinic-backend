import Joi from 'joi'

const create = {
	body: Joi.object().keys({
		name: Joi.string().trim().required(),
		lastname: Joi.string().trim().required(),
		email: Joi.string().lowercase().email().trim().required(),
		password: Joi.string().trim().required(),
		customerId: Joi.number().integer().optional(),
		isClient: Joi.boolean().optional(),
		isEmployee: Joi.boolean().optional(),
		isAdmin: Joi.boolean().optional(),
	}),
}

const update = {
	params: Joi.object().keys({
		id: Joi.number().required(),
	}),
	body: Joi.object().keys({
		name: Joi.string().trim().optional(),
		lastname: Joi.string().trim().optional(),
		email: Joi.string().lowercase().email().trim().optional(),
		password: Joi.string().trim().optional(),
		customerId: Joi.number().integer().optional(),
		isClient: Joi.boolean().optional(),
		isEmployee: Joi.boolean().optional(),
		isAdmin: Joi.boolean().optional(),
	}),
}

const destroy = {
	params: Joi.object().keys({
		id: Joi.number().required(),
	}),
}

const getParams = {
	params: Joi.object().keys({
		id: Joi.number().optional(),
	}),
}

export default { create, update, destroy, getParams }
