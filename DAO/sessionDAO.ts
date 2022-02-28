const sessionSchema = require('../models/sessionModels')

class SessionDAO {
    static async createSession(sessionToCreate) {
        try {
            let queryResult = await sessionSchema.create(sessionToCreate)
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getSessionById(id) {
        try {
            const queryResult = await sessionSchema.findOne({ _id: id })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async addUser(sessionId, userId) {
        try {
            const queryResult = await sessionSchema.updateOne({ _id: sessionId }, { $addToSet: { users: userId } });
            return queryResult
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async setImage(imageURL, sessionId) {
        try {
            const updatedSession = await sessionSchema.findByIdAndUpdate(sessionId, { image: imageURL });
            return updatedSession
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async setWord(word, difficulty, sessionId) {
        try {
            const updatedSession = await sessionSchema.findByIdAndUpdate(sessionId, { word: word, difficulty: difficulty });
            return updatedSession
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async correctGuess(sessionId) {
        try {
            const session = await sessionSchema.findOne({ _id: sessionId })
            let winPoints
            switch (session.difficulty) {
                case "easy":
                    winPoints = 1
                    break;
                case "medium":
                    winPoints = 3
                    break;
                default:
                    winPoints = 5
                    break;
            }
            const updatedSession = await sessionSchema.findByIdAndUpdate(sessionId, { points: session.points + winPoints, image: "" });
            return updatedSession
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getAllTheSessions() {
        try {
            const queryResult = await sessionSchema.find()
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async setFinishDate(sessionId) {
        try {
            const updatedSession = await sessionSchema.findByIdAndUpdate(sessionId, { finishedDate: Date.now() });
            return updatedSession
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }
}

module.exports = SessionDAO;