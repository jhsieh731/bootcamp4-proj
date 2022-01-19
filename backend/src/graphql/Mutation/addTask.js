const Task =  require('../../models/Task')

const addTask = async (obj, { input }) => {
    try {
        const added = await Task.query().insert({
            type: input.type,
            status: "not",
            title: input.title, 
            UserId: input.UserId,
        })
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