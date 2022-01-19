const Task =  require('../../models/Task')

const updateTask = async (obj, { input }) => {
    try {
        const updated = Task.query().patch({
            status: "done",
        }).returning('*')
        return updated
    }
    catch (err) {
        throw new Error('Task not updated')
    }
}

const resolver = {
    Mutation: {
        updateTask,
    }
}

module.exports = resolver