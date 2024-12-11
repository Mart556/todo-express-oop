import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

import todoRoutes from './routes/todos.js'

app.use('/todos', todoRoutes)

app.listen(3000, () => {
    console.log('Listening to port 3000')
})