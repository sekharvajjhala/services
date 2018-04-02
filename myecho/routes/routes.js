var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/date", function(req, res) {
        var mock = {
           "path": "/date resource called"
        }
        return res.send(mock);
    });

    app.get("/dateTime", function(req, res) {
        var mock = {
           "path": "/dateTime resource called"
        }
        return res.send(mock);
    });

    app.get("/echo", function(req, res) {
        var mock = {
           "path": "/echo called"
        }
        console.log(req.headers);
        return res.send(mock);
    });
}

module.exports = appRouter;
