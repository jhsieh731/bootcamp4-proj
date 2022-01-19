const { getProduct } = require('../../lib/auth')

const getActivities = async (obj, { user_id }) => {
    const activities = await tasks.query().where('UserId', 'user_id')
        .andWhere('type', 'activity').andWhere('status', 'not')
  return getActivities(activities)
}

const resolver = {
  Query: { getActivities },
}

module.exports = resolver
