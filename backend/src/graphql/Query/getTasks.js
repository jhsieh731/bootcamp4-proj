const { getProduct } = require('../../lib/auth')

const getTasks = async (obj, { user_id }) => {
    const tasks = await tasks.query().where('UserId', 'user_id')
        .andWhere('type', 'task').andWhere('status', 'not')
  return getTasks(tasks)
}

const resolver = {
  Query: { getTasks },
}

module.exports = resolver