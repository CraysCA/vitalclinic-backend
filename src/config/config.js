import dotenv from 'dotenv'
dotenv.config()

export const config = {
	serverSettings: {
		env: process.env.NODE_ENV || 'dev',
		port: process.env.PORT || 3000,
	},
	db: {
		host: process.env.DB_HOST || 'localhost',
		database: process.env.DB_NAME || 'test',
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || '',
		dialect: process.env.DB_DIALECT || 'mysql',
		logging: process.env.DB_LOGGING === 'true',
		port: process.env.DB_PORT || 3306,
	},
}
