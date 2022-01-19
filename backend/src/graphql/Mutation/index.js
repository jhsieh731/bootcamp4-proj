const merge = require('lodash.merge')
const Auth = require('./Auth')
const addTask = require('./addTask')
const deleteTask = require('./deleteTask')
const updateTask = require('./updateTask')

const resolvers = [Auth, addTask, deleteTask, updateTask]

module.exports = merge(...resolvers)
