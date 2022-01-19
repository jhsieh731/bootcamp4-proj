const { getProduct } = require('../../lib/auth')
const Friend = require('../../models/Friend')

const allFriendships = async () => {
  try {
    const friends = await Friend.query()
    return friends
  } catch (err) {
    throw new Error('failure')
  }
}


const resolver = {
  Query: { allFriendships },
}

module.exports = resolver