module.exports = function (app) {
    app.use('/api/task', require('./api/task'));
    app.use('/api/student', require('./api/student'))
}