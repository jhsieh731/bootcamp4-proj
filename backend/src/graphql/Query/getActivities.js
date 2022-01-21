const Task =  require('../../models/Task')

const getActivities = async (obj, { user_id }) => {
  try {
    const tasks = await Task.query().select('*').where({ UserId: user_id })
      .andWhere({ type: 'activity' }).andWhere({ status: 'not' })
    return tasks
  } catch (err) {
    throw new Error('failed to get activities')
  }
}

const resolver = {
  Query: { getActivities },
}

module.exports = resolver