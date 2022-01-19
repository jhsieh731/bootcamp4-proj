const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const CheckToken = require('./CheckToken')
const User = require('./User')
const Friend = require('./getFriends')



const resolvers = [Welcome, CheckToken, User, Friend]

module.exports = merge(...resolvers)
