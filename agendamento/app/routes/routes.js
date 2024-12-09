

module.exports = {
    home: (app) => {
        app.get("/", function(req, res) {
            //res.render("home.ejs");
            home(app,req, res);
        });
    },
    estetica: (app) => {
        app.get(["/estetica"], function(req, res){
            res.render("estetica.ejs");
        });
    }
}