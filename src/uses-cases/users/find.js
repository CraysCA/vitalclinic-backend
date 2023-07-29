import { usersRepository } from '../../models/repositories/index.js'
export default () => {
	async function execute({ data }) {
		return usersRepository.find({ data })
	}

	return { execute }
}
