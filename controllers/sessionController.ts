export { };

const SessionDAO = require("../DAO/sessionDAO");

export async function newSession(req, res) {
    try {
        const { username } = req.body;

        const userToAdd = {
            username: username,
            points: 0,
            drawer: false,
        };
        const user = await SessionDAO.createSession(userToAdd);

        res.send({ message: "Welcome to Guess & Draw!", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function saveImage(req, res) {
    try {
        const { imageURL, sessionId } = req.body;
        const session = await SessionDAO.setImage(imageURL, sessionId);

        res.send({ message: "Added!", session });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getSession(req, res) {
    try {
        const { sessionId } = req.params;
        const session = await SessionDAO.getSessionById(sessionId);

        res.send({ message: "Found!", session });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function saveWord(req, res) {
    try {
        const { selectedWord, difficulty, sessionId } = req.body;
        const session = await SessionDAO.setWord(selectedWord, difficulty, sessionId);

        res.send({ message: "Added!", session });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function guessSuccess(req, res) {
    try {
        const { sessionId } = req.params;
        const session = await SessionDAO.correctGuess(sessionId);

        res.send({ message: "Congratulations!", session });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getAllSessions(req, res) {
    try {
        const sessions = await SessionDAO.getAllTheSessions();

        res.send({ message: "Found sessions!", sessions });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function endSession(req, res) {
    try {
        const { sessionId } = req.params;
        await SessionDAO.setFinishDate(sessionId);

        res.send({ message: "The session is over!" });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}