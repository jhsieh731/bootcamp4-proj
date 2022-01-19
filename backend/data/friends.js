const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({user1Id, user2Id}) => ({
    id: casual.uuid,
    user1: user1Id,
    user2: user2Id,
    status: casual.random_element(['accepted', 'rejected', 'pending'])
}))

const friendData = []

for (let i = 0; i < 20; i+=1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    friendData.push(casual.friend({ user1Id, user2Id}))
}
console.log(friendData)
module.exports = friendData