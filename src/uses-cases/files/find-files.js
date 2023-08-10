import { fileRepository } from '../../models/repositories/index.js'

export default ({ id, userId, date }) => {
	return fileRepository.find({ id, userId, date })
}
