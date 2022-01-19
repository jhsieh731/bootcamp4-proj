const friendData = require('../data/friends')

exports.seed = knex => knex('friends').del()
  .then(() => knex('friends').insert(friendData))
