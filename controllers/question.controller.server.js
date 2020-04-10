const questionService = require('../services/question.service.server');

module.exports = function (app) {

    app.get('/api/questions', (req, res) => {
        res.send(questionService.findAllQuestions())
    });

    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const quizId = req.params.qid;
        const questions = questionService.findQuestionsForQuiz(quizId);
        res.json(questions);
    })
};
