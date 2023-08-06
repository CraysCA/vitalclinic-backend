import jwt from 'jsonwebtoken'
import { config } from '../../config/config.js'
const { secret } = config.jwt

export default async ({ userData }) => {
	const payload = {
		sub: userData.id,
		name: `${userData.name} ${userData.lastname}`,
		isAdmin: userData.isAdmin,
	}

	const token = jwt.sign(payload, secret, { expiresIn: '1d' })

	return token
}
