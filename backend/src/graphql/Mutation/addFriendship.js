const Friendship =  require('../../models/Friend')
const User = require('../../models/User')

const addFriendship = async (obj, { input }) => {
    try {
        const friend2_id = User.query().select('id').where({ email: input.friend2_email })
        const added = await Friendship.query().insert({
            friend1: input.friend1,
            friend2: friend2_id,
            status: "Pending",
        }).returning('*')
        return added
    }
    catch (err) {
        throw new Error(`Friend not added ${err}`)
    }
}

const resolver = {
    Mutation: {
        addFriendship,
    }
}

module.exports = resolver