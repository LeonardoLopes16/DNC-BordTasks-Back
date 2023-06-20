function routes(app){
    app.use('/users', require('./routes/users.js'));
    return;
}

modeule.exports = routes;