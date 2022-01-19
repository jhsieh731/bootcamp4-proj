const { getProduct } = require('../../lib/auth')
const Task =  require('../../models/Task')

const getTasks = async (obj, { user_id }) => {
  try {
    const tasks = await Task.query().select('*').where({ UserId: user_id })
      .andWhere({ type: 'task' }).andWhere({ status: 'not' })
    return tasks
  } catch (err) {
    throw new Error('failed to get tasks')
  }
}

const resolver = {
  Query: { getTasks },
}

module.exports = resolver