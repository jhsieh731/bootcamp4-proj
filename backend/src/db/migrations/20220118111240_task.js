
const { createTableIfNotExists } = require('../helpers')


exports.up = async knex => createTableIfNotExists(knex, 'tasks', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .enum('type',['activity','task'])
      .notNullable()

    table
      .enum('status',['done','not'])
      .notNullable()

    table
      .uuid('UserId')
      .references('users.id')
      .notNullable()
  
    table.string('title').notNullable()
  
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  })


  exports.down = async knex => knex.schema.dropTableIfExists('tasks')
  