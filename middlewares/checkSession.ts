export { };

const SessionDAO = require('../DAO/sessionDAO')

export async function checkSession(req, res, next) {
    try {
        if (req.session) {
            if (req.session.users.length === 1) {
                req.drawer = false
                next()
            } else if (req.session.users.length > 1) {
                return res.status(400).send("The session is already completed");
            }
        } else {
            next()
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("The session doesn't exist");
    }
}