let questions = require('./questions.json')

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId);

const findAllQuestions = () => questions;

module.exports = {
    findQuestionsForQuiz,
    findAllQuestions
};
