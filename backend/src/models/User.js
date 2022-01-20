const BaseModel = require('./BaseModel')
const { HasManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Task = require('./Task')
    return {
      tasks: {
        relation: HasManyRelation,
        modelClass: Task,
        join: {
          from: 'users.id',
          to: 'tasks.UserId',
        },
      },
    }
  }
}

module.exports = User
