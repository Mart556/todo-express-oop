import { Todo } from "../models/todo.js";

class todoController {
    constructor() {
        this.TODOS = []
    }

    createTodo(req, res) {
        const taskName = req.body.task;

        if (taskName === '') return console.log('Task cannot be empty string.')

        const newTodo = new Todo(Math.random().toString(), taskName)

        this.TODOS.push(newTodo)

        res.json({
            message: 'Create a new todo',
            newTask: newTodo
        })
    }
}

export const TodoController = new todoController()