const Task =  require('../../models/Task')

const addTask = async (obj, { input }) => {
    try {
        const added = Task.query().insert({
            type: input.type,
            status: "not",
            title: input.title, 
            UserID: input.UserID,
        }).returning('*')
        return added
    }
    catch (err) {
        throw new Error('Task not added')
    }
}

const resolver = {
    Mutation: {
        addTask,
    }
}

module.exports = resolver