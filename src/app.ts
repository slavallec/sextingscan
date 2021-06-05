import express from 'express'
import morgan from "morgan"
import helmet from "helmet"
import {config} from 'dotenv'
import indexRoutes from "./routes/index";

config()
const app = express()

//Settings
app.set('port', process.env.PORT || 1523)

//Middlewares
app.use(helmet())
app.use(morgan('dev'))

//Routes
app.use('/api', indexRoutes)

export default app;