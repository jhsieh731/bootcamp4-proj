const merge = require('lodash.merge')
const CheckToken = require('./CheckToken')
const User = require('./User')
const getFriends = require('./getFriends')
const getTasks = require('./getTasks')
const getActivities = require('./getActivities')
const getCompleted = require('./getCompleted')

const resolvers = [CheckToken, User, getFriends, getTasks, getActivities, getCompleted]

module.exports = merge(...resolvers)
