const { getProduct } = require('../../lib/auth')
const Completed =  require('../../models/Task')

const getCompleted = async (obj, { user_id }) => {
  try {
    const completed = await Completed.query().select('*').where({ UserId: user_id })
      .andWhere({ type: 'task' }).andWhere({ status: 'done' })
    return completed
  } catch (err) {
    throw new Error('failed to get completed tasks')
  }
}

const resolver = {
  Query: { getCompleted },
}

module.exports = resolver