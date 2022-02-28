export { };

const UsersDAO = require("../DAO/userDAO");
const SessionDAO = require("../DAO/sessionDAO");

export async function setUser(req, res) {
  try {
    let { playerName } = req.body;

    const userToAdd = {
      playerName: playerName,
      drawer: req.drawer,
    };
    let user = await UsersDAO.createUser(userToAdd);
    let userId = user._id.toString()

    if (req.session) {
      const sessionId = req.session._id.toString()
      await SessionDAO.addUser(sessionId, userId);
      res.send({ message: "Welcome to Guess & Draw!", user, sessionId });
    } else if (req.newSession) {
      const sessionId = req.newSession._id.toString()
      await SessionDAO.addUser(sessionId, userId);
      res.send({ message: "Welcome to Guess & Draw!", user, sessionId });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export async function changeUserRole(req, res) {
  try {
    const { usersInSession } = req.body;
    const user1 = await UsersDAO.getUserById(usersInSession[0]);
    const rolUser1 = checkRole(user1.drawer)
    await UsersDAO.modifyUser(user1._id, rolUser1);

    const user2 = await UsersDAO.getUserById(usersInSession[1]);
    const rolUser2 = checkRole(user2.drawer)
    await UsersDAO.modifyUser(user2._id, rolUser2);

    res.send({ message: "Amazing! The users were modified", user1, user2 });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

function checkRole(role) {
  try {
    if (role) {
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getUserInfo(req, res) {
  try {
    const { userId } = req.params;
    const user = await UsersDAO.getUserById(userId);
    res.send({ message: "Details of the user founded", user });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

/* export async function getAllUsers(req, res) {
  try {
    const allUsers = await UsersDAO.getAllTheUsers();
    res.send({ message: "Users founded", allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
 */