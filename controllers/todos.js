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

    updateTodo(req, res) {
        const taskId = req.params.id;

        const updatedTask = req.body.task;

        const taskIndex = this.TODOS.findIndex((todo) => (todo.id === taskId))

        if (taskIndex < 0) {
            res.json({
                message: 'Could not find todo with this id.'
            })

            throw new Error('Could not find todo with this id.')
        }

        this.TODOS[taskIndex] = new Todo(this.TODOS[taskIndex].id, updatedTask)

        console.log(updatedTask)

        res.json({
            message: 'Updated task!',
            updatedTask: updatedTask
        })
    }   

    deleteTodo(req, res) {
        const taskId = req.params.id;

        const taskIndex = this.TODOS.findIndex((todo) => (todo.id === taskId))

        if (taskIndex < 0) {
            res.json({
                message: 'Could not find todo with this id.'
            })

            throw new Error('Could not find todo with this id.')
        }

        this.TODOS.splice(taskIndex, 1)

        res.json({
            message: 'Deleted task!',
        })
    }   


    getTodos(req, res) {
        return res.json({tasks: this.TODOS})
    }
}

export const TodoController = new todoController()