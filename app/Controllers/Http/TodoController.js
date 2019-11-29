'use strict'

const TODO = use('App/Models/Todo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with todos
 */
class TodoController {
  /**
   * Show a list of all todos.
   * GET todos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const todos = await TODO.all();

    return todos;
  }

  /**
   * Create/save a new todo.
   * POST todos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const todoString = request.only(['content'])

    const createdTodo = 
      await TODO
      .create(todoString)

    return createdTodo
  }

  /**
   * Update todo details.
   * PUT or PATCH todos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async updateContent ({ params, request }) {
    const todoId = params.id
    const newTodoString = request.only(['content']);

    const updatedTodo = 
      await TODO
      .query()
      .where('id', todoId)
      .update({ content: newTodoString })

    return updatedTodo;
  }

  async updateStatus ({ params }) {
    const todoId = params.id

    const updatedTodo = 
      await TODO
      .query()
      .where('id', todoId)
      .update({ completed: true });

    return updatedTodo;
  }

  /**
   * Delete a todo with id.
   * DELETE todos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const todoId = params.id;

    await TODO
    .query()
    .where('id', todoId)
    .delete()
  }
}

module.exports = TodoController
