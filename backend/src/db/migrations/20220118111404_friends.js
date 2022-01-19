const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table 
    .uuid('friend1').references('users.id')
    .notNullable()

  table
    .uuid('friend2').references('users.id')
    .notNullable()

  table 
    .enum('status', ['Accepted', 'Pending'])
    .notNullable
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')