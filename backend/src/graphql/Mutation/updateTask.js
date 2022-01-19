const Task =  require('../../models/Task')

const updateTask = async (obj, { id }) => {
    try {
        const updated = await Task.query().findById(id).patch({
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