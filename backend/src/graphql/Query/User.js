const User = require('../../models/User')
const { getProduct } = require('../../lib/auth')
const Friend = require('../../models/Friend')
const Task = require('../../models/Task')

const allUsers = async () => {
    try {
      const users = await User.query()
      return users
    } catch (err) {
      throw new Error('failure')
    }
  }

  const friendships = async ({ id }, params, context) => {
      const friends = await Friend.query().where('friend1', id)
    return friends
  }

  
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
    allUsers,
    user,
    userByEmail
    },
    User: {
        friendships,
        tasks,
    },
  }
  
  module.exports = resolver
