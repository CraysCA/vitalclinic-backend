import { usersRepository } from '../../models/repositories/index.js'
export default () => {
	async function execute({ id, data }) {
		return usersRepository.update({ id, data })
	}

	return { execute }
}
