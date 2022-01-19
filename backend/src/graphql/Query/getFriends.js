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

const friendship = async (obj, { id }, context) => {
  const a = await Friend.query().where('friend1', id).orWhere('friend2',id)
  return a
}

const pendingFriend = async (obj, { id }, context) => {
  const b = await Friend.query().where('status','Pending').andWhere('friend2', id)
  return b
}

const resolver = {
  Query: { 
  allFriendships,
  friendship,
  pendingFriend,
 },
}

module.exports = resolver