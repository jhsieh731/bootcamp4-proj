const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Task extends BaseModel {
  static get tableName() {
    return 'tasks'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.UserId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Task
