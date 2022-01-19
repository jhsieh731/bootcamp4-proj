const Task =  require('../../models/Task')

const deleteTask = async (obj, { id }) => {
    try {
        const deleted = await Task.query().deleteById(id).returning('*')
        return deleted
    }
    catch (err) {
        throw new Error('Task not deleted')
    }
}

const resolver = {
    Mutation: {
        deleteTask,
    }
}

module.exports = resolver