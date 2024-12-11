import { Todo } from "../models/todo.js";
import { fileManager } from "../files.js";

class todoController {
    constructor() {
        this.initTodos()
    }

    async initTodos() {
        this.TODOS = await fileManager.readFile('./data/tasks.json')
    }

    async createTodo(req, res) {
        const taskName = req.body.task;

        if (taskName === '') return console.log('Task cannot be empty string.')

        const newTodo = new Todo(Math.random().toString(), taskName)

        this.TODOS.push(newTodo)

        await fileManager.writeFile('./data/tasks.json', this.TODOS)

        res.json({
            message: 'Create a new todo',
            newTask: newTodo
        })
    }

    async updateTodo(req, res) {
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

        await fileManager.writeFile('./data/tasks.json', this.TODOS)

        res.json({
            message: 'Updated task!',
            updatedTask: updatedTask
        })
    }   

    async deleteTodo(req, res) {
        const taskId = req.params.id;

        const taskIndex = this.TODOS.findIndex((todo) => (todo.id === taskId))

        if (taskIndex < 0) {
            res.json({
                message: 'Could not find todo with this id.'
            })

            throw new Error('Could not find todo with this id.')
        }

        this.TODOS.splice(taskIndex, 1)

        await fileManager.writeFile('./data/tasks.json', this.TODOS)

        res.json({
            message: 'Deleted task!',
        })
    }   


    getTodos(req, res) {
        return res.json({tasks: this.TODOS})
    }
}

export const TodoController = new todoController()