import Joi from 'joi'

const create = {
	body: Joi.object().keys({
		name: Joi.string().trim().required(),
		lastname: Joi.string().trim().required(),
		email: Joi.string().lowercase().email().trim().required(),
		password: Joi.string().trim().required(),
		customerId: Joi.number().integer().required(),
	}),
}

const destroy = {
	body: Joi.object().keys({
		name: Joi.string().trim().required(),
		lastname: Joi.string().trim().required(),
		email: Joi.string().lowercase().email().trim().required(),
		password: Joi.string().trim().required(),
		customerId: Joi.number().integer().required(),
	}),
}

export default { create, destroy }
