const userSchema = require('../models/userModals')

class UsersDAO {
    static async createUser(userToCreate) {
        try {
            let queryResult = await userSchema.create(userToCreate)
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async modifyUser(userId, role) {
        try {
            let queryResult = await userSchema.findByIdAndUpdate(userId, {drawer: role})
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }
 
    static async getUserById(id) {
        try {
            const queryResult = await userSchema.findOne({ _id: id })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }
}

module.exports = UsersDAO;