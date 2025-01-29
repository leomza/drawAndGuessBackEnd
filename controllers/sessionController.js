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
exports.endSession = exports.getAllSessions = exports.guessSuccess = exports.saveWord = exports.getSession = exports.saveImage = exports.newSession = void 0;
var SessionDAO = require("../DAO/sessionDAO");
function newSession(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username, userToAdd, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    username = req.body.username;
                    userToAdd = {
                        username: username,
                        points: 0,
                        drawer: false
                    };
                    return [4 /*yield*/, SessionDAO.createSession(userToAdd)];
                case 1:
                    user = _a.sent();
                    res.send({ message: "Welcome to Guess & Draw!", user: user });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.newSession = newSession;
function saveImage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, imageURL, sessionId, session, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, imageURL = _a.imageURL, sessionId = _a.sessionId;
                    return [4 /*yield*/, SessionDAO.setImage(imageURL, sessionId)];
                case 1:
                    session = _b.sent();
                    res.send({ message: "Added!", session: session });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveImage = saveImage;
function getSession(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sessionId, session, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sessionId = req.params.sessionId;
                    return [4 /*yield*/, SessionDAO.getSessionById(sessionId)];
                case 1:
                    session = _a.sent();
                    res.send({ message: "Found!", session: session });
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
exports.getSession = getSession;
function saveWord(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, selectedWord, difficulty, sessionId, session, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, selectedWord = _a.selectedWord, difficulty = _a.difficulty, sessionId = _a.sessionId;
                    return [4 /*yield*/, SessionDAO.setWord(selectedWord, difficulty, sessionId)];
                case 1:
                    session = _b.sent();
                    res.send({ message: "Added!", session: session });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(500).send(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveWord = saveWord;
function guessSuccess(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sessionId, session, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sessionId = req.params.sessionId;
                    return [4 /*yield*/, SessionDAO.correctGuess(sessionId)];
                case 1:
                    session = _a.sent();
                    res.send({ message: "Congratulations!", session: session });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.status(500).send(error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.guessSuccess = guessSuccess;
function getAllSessions(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sessions, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SessionDAO.getAllTheSessions()];
                case 1:
                    sessions = _a.sent();
                    res.send({ message: "Found sessions!", sessions: sessions });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    res.status(500).send(error_6.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllSessions = getAllSessions;
function endSession(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sessionId, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sessionId = req.params.sessionId;
                    return [4 /*yield*/, SessionDAO.setFinishDate(sessionId)];
                case 1:
                    _a.sent();
                    res.send({ message: "The session is over!" });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    res.status(500).send(error_7.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.endSession = endSession;
