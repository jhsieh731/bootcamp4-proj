const User = require('../../models/User')
const Task = require('../../models/Task')
  
const user = async (obj, { id  }, context) => {
  const a = await User.query().findOne('id', id)
  return a
}

const userByEmail = async (obj, { email }, context) => {
  const a = await User.query().findOne('email', email)
  return a
}

const tasks = async ({ id }, params, context) => {
  const b = await Task.query().where('UserId', id).andWhere({ status: 'done' })
  return b
}

  
  const resolver = {
    Query: { 
    user,
    userByEmail
    },
    User: {
        tasks,
    },
  }
  
  module.exports = resolver
