import { fileRepository } from '../../models/repositories/index.js'

export default ({ id }) => {
	return fileRepository.find({ id })
}
