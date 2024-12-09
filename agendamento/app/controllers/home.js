module.exports = (app, req, res) => {
    console.log("estamos no controller");
    res.send("home.ejs");
}