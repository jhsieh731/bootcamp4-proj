const Friendship =  require('../../models/Friend')

const deleteFriendship = async (obj, { id }) => {
    try {
        const deleted = await Friendship.query().deletebyID(id).returning('*')
        return deleted
    }
    catch (err) {
        throw new Error('Friend not deleted')
    }
}

const resolver = {
    Mutation: {
        deleteFriendship,
    }
}

module.exports = resolver