const Friendship =  require('../../models/Friend')

const addFriendship = async (obj, { input }) => {
    try {
        const added = Friendship.query().insert({
            friend1: input.friend1,
            friend2: input.friend2,
            status: "Pending",
        }).returning('*')
        return added
    }
    catch (err) {
        throw new Error('Friend not added')
    }
}

const resolver = {
    Mutation: {
        addFriendship,
    }
}

module.exports = resolver