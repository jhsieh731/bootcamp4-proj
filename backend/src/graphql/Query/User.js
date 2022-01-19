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
      const friends = await Friend.query().where('friend1', id).andWhere('status', 'Accepted')
    return friends
  }
  
  const resolver = {
    Query: { 
    allUsers,
    },
    User: {
        friendships,
    },
  }
  
  module.exports = resolver
