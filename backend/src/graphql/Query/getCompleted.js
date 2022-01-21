const Task =  require('../../models/Task')

const getCompleted = async (obj, { user_id }) => {
  try {
    const completed = await Task.query().select('*').where({ UserId: user_id })
      .andWhere({ status: 'done' })
    return completed
  } catch (err) {
    throw new Error('failed to get completed tasks')
  }
}

const resolver = {
  Query: { getCompleted },
}

module.exports = resolver