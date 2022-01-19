const Friendship =  require('../../models/Friend')

const updateFriendship = async (obj, { id }) => {
    try {
        const updated = await Friendship.query().findbyID(id).patch({
            status: "Accepted",
        }).returning('*')
        return updated
    }
    catch (err) {
        throw new Error('Friend not updated')
    }
}

const resolver = {
    Mutation: {
        updateFriendship,
    }
}

module.exports = resolver