const { getProduct } = require('../../lib/auth')
/* this will only returnthe user of the friend and requries the user to 
know the user1_id so we can fix this by joining tables (user and friends) with graphFetched 
or adding name to friends db */
const getFriends = async (obj, { user_id }) => {
    const friends = await friends.query().where('user1_id', 'user_id').andWhere('status', 'Accepted')
  return getFriend(friends)
}

const resolver = {
  Query: { getFriends },
}

module.exports = resolver