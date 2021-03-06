const Friend = require('../../models/Friend')

const friendship = async (obj, { id }, context) => {
  const a = await Friend.query().where(builder => builder.where('friend1', id).orWhere('friend2',id))
  .where({ status: 'Accepted' })
  return a
}

const pendingFriend = async (obj, { id }, context) => {
  const b = await Friend.query().where('status','Pending').where('friend2', id)
  return b
}

const requestedFriend = async (obj, { id }, context) => {
  const c = await Friend.query().where('status','Pending').where('friend1', id)
  return c
}

const resolver = {
  Query: {
    friendship, 
    pendingFriend,
    requestedFriend,
  },
}

module.exports = resolver