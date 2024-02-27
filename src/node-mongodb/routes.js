module.exports = function (app) {
    app.use('/api/task', require('./api/task'))
}