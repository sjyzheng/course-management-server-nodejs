const quizAttemptsDao = require('../daos/quiz-attempts.dao.server')

const findAttemptsForQuiz = (qid) => quizAttemptsDao.findAttemptsForQuiz(qid);
const createAttempt = (qid, attempt) => quizAttemptsDao.createAttempt(qid, attempt);

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}
