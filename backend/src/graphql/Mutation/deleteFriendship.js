const Friendship =  require('../../models/Friend')

const deleteFriendship = async (obj, { input }) => {
    try {
        const deleted = await Friendship.query().delete().where({ friend1: input.friend1 }).andWhere({ friend2: input.friend2}).returning('*').first()
        console.log(deleted);
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