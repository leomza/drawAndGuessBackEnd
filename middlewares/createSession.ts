export { };

const SessionDAO = require('../DAO/sessionDAO')

export async function createSession(req, res, next) {
    try {
        const { sessionId } = req.body;

        if (!sessionId) {
            //Create session
            const sessionToAdd = {
                users: [],
                word: "",
                difficulty: "",
                points: 0,
                createdDate: Date.now(),
                image: ""
            };
            const session = await SessionDAO.createSession(sessionToAdd);
            req.newSession = session
            req.drawer = true
            next()
        } else {
            //Get session by ID
            const getSession = await SessionDAO.getSessionById(sessionId)
            if (!getSession) {
                return res.status(400).send("The session doesn't exist");
            } else {
                req.session = getSession
                next()
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}