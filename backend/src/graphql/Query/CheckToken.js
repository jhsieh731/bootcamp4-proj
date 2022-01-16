const { decodeToken } = require('../../lib/auth')

const checkToken = async (obj, { token }) => {
  const decodedToken = decodeToken(token)
  console.log(decodedToken);
  if (decodedToken) {
    return true
  }
  else {
    return false
  }
}

const resolver = {
  Query: { checkToken },
}

module.exports = resolver
