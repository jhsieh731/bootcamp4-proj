const Task =  require('../../models/Task')

const deleteTask = async (obj, { input }) => {
    try {
        const deleted = Task.query().delete().where(ID = input.TaskID).returning('*')
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