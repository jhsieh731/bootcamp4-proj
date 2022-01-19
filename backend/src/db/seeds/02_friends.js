const friendData = require('../../../data/friend')

exports.seed = knex => knex('friends').del()
  .then(() => knex('friends').insert(friendData))
