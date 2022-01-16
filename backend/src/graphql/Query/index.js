const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const CheckToken = require('./CheckToken')

const resolvers = [Welcome, CheckToken]

module.exports = merge(...resolvers)
