const casual = require('casual')
const userData = require('./user')

casual.define('friend', ({user1Id, user2Id}) => ({
    id: casual.uuid,
    friend1: user1Id,
    friend2: user2Id,
    status: casual.random_element(['Accepted', 'Pending'])
}))

const friendData = []

for (let i = 0; i < 20; i+=1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    friendData.push(casual.friend({ user1Id, user2Id}))
}
// console.log(friendData)
module.exports = friendData