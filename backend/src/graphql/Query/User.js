const User = require('../../models/User')
const { getProduct } = require('../../lib/auth')
const Friend = require('../../models/Friend')


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

  
  const resolver = {
    Query: { 
    allUsers,
    user,
    },
    User: {
        friendships,
    },
  }
  
  module.exports = resolver
