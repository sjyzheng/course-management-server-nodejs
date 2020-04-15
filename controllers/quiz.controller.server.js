const quizService = require('../services/quiz.service.server');

module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
}
