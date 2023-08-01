import { userRepository } from '../../models/repositories/index.js'

export default ({ data }) => {
	return userRepository.create({ data })
}
