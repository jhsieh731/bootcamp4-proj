const Friendship =  require('../../models/Friend')

const updateFriendship = async (obj, { input }) => {
    try {
        const updated = await Friendship.query().patch({
            status: "Accepted",
        }).where({ friend1: input.friend1 }).andWhere({ friend2: input.friend2 }).returning('*').first()
        return updated
    }
    catch (err) {
        throw new Error(`Friend not updated ${err}`)
    }
}

const resolver = {
    Mutation: {
        updateFriendship,
    }
}

module.exports = resolver