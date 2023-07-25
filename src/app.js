import Express from 'express'
import routes from './interface/routes/index.js'
import logger from './interface/utils/logger.js'

const app = Express()

app.use(Express.json())
app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`))
