const { AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const { isValid } = require('date-fns')
const jwt = require('jsonwebtoken')
const config = require('../config')

/**
 *
 * @param {object} payload
 * @returns {Promise<string>}
 */

const createToken = payload => jwt.sign(payload, config.tokenSecret)

/**
 *
 * @param {*} token
 * @returns {Promise<{id: number, phoneNumber: string}>}
 */

const decodeToken = token => {
  if (!token) {
    return false
  }
  try {
    const isValidToken = jwt.verify(token, config.tokenSecret)
    if(isValidToken) return true
  } catch (error) {
    return false
  }
}

/**
 *
 * @param {string} password - typically the user entered password
 * @returns {Promise.<string>}
 */
const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      reject(err)
    } else {
      resolve(hash)
    }
  })
})


/**
 *
 * @param {string} password - typically the user entered password
 * @param {string} hashedPassword - typically the password that was previously hashed by bcrypt
 * @returns {Promise.<boolean>}
 */
const comparePassword = (password, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashedPassword, (err, matches) => {
    if (err) {
      reject(err)
    } else {
      resolve(matches)
    }
  })
})


module.exports = {
  hashPassword, comparePassword, createToken, decodeToken,
}
