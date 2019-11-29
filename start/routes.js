'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group('todogroup', () => {
  Route.resource('todos', 'TodoController').apiOnly().except(['show', 'update'])

  Route.put('todos/:id/content', 'TodoController.updateContent')
  Route.put('todos/:id/status', 'TodoController.updateStatus')
})