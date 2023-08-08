//import { Login } from '../uses-cases/auth/index.js'
import { s3 } from '../interface/utils/index.js'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'node:fs'

const uploadFile = async (request, response, next) => {
	let { files } = request.files

	if (typeof files === 'object' && !files[1]) files = [files]

	//console.log(files)

	console.log(files[0].data)
	try {
		const stream = fs.createReadStream(files[0].tempFilePath)
		const params = {
			Bucket: 'prueba123cris',
			Key: files[0].name,
			Body: stream,
		}

		const command = new PutObjectCommand(params)
		const data = await s3.send(command)

		console.log(data)

		response.status(200).json({
			success: true,
			message: 'file uploaded',
		})
	} catch (error) {
		next(error)
	}
}

export default {
	uploadFile,
}
