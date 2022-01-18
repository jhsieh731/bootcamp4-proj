const casual = require('casual')
const usersData = require('./user')

casual.define('task', UserId => ({
  id: casual.uuid,
  type: casual.random_element(['activity','task']),
  title: casual.title,
  UserId,
  status: casual.random_element(['done','not'])
}))

const taskData = []

for (let i = 0; i < 10; ++i) {
  const UserId = casual.random_element(usersData).id
  taskData.push(casual.task(UserId))
}

module.exports = taskData
