const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Friends extends BaseModel {
  static get tableName() {
    return 'friends'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'friends.user1Id',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Task