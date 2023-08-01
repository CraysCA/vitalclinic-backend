import connection from '../connection.js'
import { DataTypes } from 'sequelize'

import { userModel } from './index.js'

const models = {
	user: userModel(connection, DataTypes),
}

Object.keys(models).forEach(modelName => {
	if (models[modelName].associate) {
		models[modelName].associate(models)
	}
})

export default models
