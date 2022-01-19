const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const CheckToken = require('./CheckToken')
const User = require('./User')
const getFriends = require('./getFriends')
const getTasks = require('./getTasks')


const resolvers = [Welcome, CheckToken, User, getFriends, getTasks]

module.exports = merge(...resolvers)
