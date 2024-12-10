import express from 'express'
import bodyParser from 'body-parser'

const app = express()

import todoRoutes from './routes/todos.js'

app.use(bodyParser.json())

app.use('/todos', todoRoutes)

app.use(express.urlencoded({express: true}))

app.listen(3000, () => {
    console.log('Listening to port 3000')
})