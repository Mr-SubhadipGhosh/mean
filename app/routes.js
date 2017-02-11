var todoRouter = require('./routes/todoRoutes.js');

module.exports = function (app) {
    //api routes-------------------------------------------
    app.use('/api/todo', todoRouter);

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
