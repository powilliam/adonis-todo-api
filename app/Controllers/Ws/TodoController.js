'use strict'

class TodoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log(`Running: ${socket.id}`)
  }

  onMessage(todo) {
    const { content: newTodoString } = todo;

    this.socket.emit('newTodo', newTodoString)
    console.log(`todo received: "${newTodoString}"`)
  }
}

module.exports = TodoController
