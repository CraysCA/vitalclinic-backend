import Express from 'express'
import routes from './interface/routes/index.js'
import logger from './interface/utils/logger.js'
import './models/db/connection.js'
import errorHandler from './interface/middlewares/error-handler.js'
import { config } from './config/config.js'
const { port } = config.serverSettings

const app = Express()

app.use(Express.json())
app.use(routes)

app.use(errorHandler)

app.listen(port, () => logger.info(`Server is running on port ${port}`))
