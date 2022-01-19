const merge = require('lodash.merge')
const Auth = require('./Auth')
const addTask = require('./addTask')
const deleteTask = require('./deleteTask')
const updateTask = require('./updateTask')
const addFriendship = require('./addFriendship')
const deleteFriendship = require('./deleteFriendship')
const updateFriendship = require('./updateFriendship')

const resolvers = [Auth, addTask, deleteTask, updateTask, addFriendship, deleteFriendship, updateFriendship]

module.exports = merge(...resolvers)
