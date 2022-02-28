"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getUserInfo = exports.changeUserRole = exports.setUser = void 0;
var UsersDAO = require("../DAO/userDAO");
var SessionDAO = require("../DAO/sessionDAO");
function setUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var playerName, userToAdd, user, userId, sessionId, sessionId, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    playerName = req.body.playerName;
                    userToAdd = {
                        playerName: playerName,
                        drawer: req.drawer
                    };
                    return [4 /*yield*/, UsersDAO.createUser(userToAdd)];
                case 1:
                    user = _a.sent();
                    userId = user._id.toString();
                    if (!req.session) return [3 /*break*/, 3];
                    sessionId = req.session._id.toString();
                    return [4 /*yield*/, SessionDAO.addUser(sessionId, userId)];
                case 2:
                    _a.sent();
                    res.send({ message: "Welcome to Guess & Draw!", user: user, sessionId: sessionId });
                    return [3 /*break*/, 5];
                case 3:
                    if (!req.newSession) return [3 /*break*/, 5];
                    sessionId = req.newSession._id.toString();
                    return [4 /*yield*/, SessionDAO.addUser(sessionId, userId)];
                case 4:
                    _a.sent();
                    res.send({ message: "Welcome to Guess & Draw!", user: user, sessionId: sessionId });
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send(error_1.message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.setUser = setUser;
function changeUserRole(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usersInSession, user1, rolUser1, user2, rolUser2, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    usersInSession = req.body.usersInSession;
                    return [4 /*yield*/, UsersDAO.getUserById(usersInSession[0])];
                case 1:
                    user1 = _a.sent();
                    rolUser1 = checkRole(user1.drawer);
                    return [4 /*yield*/, UsersDAO.modifyUser(user1._id, rolUser1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, UsersDAO.getUserById(usersInSession[1])];
                case 3:
                    user2 = _a.sent();
                    rolUser2 = checkRole(user2.drawer);
                    return [4 /*yield*/, UsersDAO.modifyUser(user2._id, rolUser2)];
                case 4:
                    _a.sent();
                    res.send({ message: "Amazing! The users were modified", user1: user1, user2: user2 });
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error(error_2);
                    res.status(500).send(error_2.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.changeUserRole = changeUserRole;
function checkRole(role) {
    try {
        if (role) {
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getUserInfo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, user, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.params.userId;
                    return [4 /*yield*/, UsersDAO.getUserById(userId)];
                case 1:
                    user = _a.sent();
                    res.send({ message: "Details of the user founded", user: user });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserInfo = getUserInfo;
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
