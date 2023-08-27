import { unauthorized } from '@hapi/boom'

export default (request, response, next) => {
	const userId = request.headers['X-User-Id']

	if (!userId) {
		return response.status(401).json({
			success: false,
			message: unauthorized().output.payload.message,
		})
	}
	next()
}
