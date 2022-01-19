const taskData = require('../../../data/task')


exports.seed = knex => knex('tasks').del()
  .then(() => knex('tasks').insert(taskData))
