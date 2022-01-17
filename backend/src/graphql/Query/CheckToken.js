const { decodeToken } = require('../../lib/auth')

const checkToken = async (obj, { token }) => {
  return decodeToken(token)
}

const resolver = {
  Query: { checkToken },
}

module.exports = resolver
