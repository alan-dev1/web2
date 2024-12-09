let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');

app.listen(port, function(){
    console.log('Servidor rodando com express na porta',port);
});
app.get("/", function(req, res){
    res.render('home.ejs');
})
app.get("/estetica", function(req,res){
    res.render("estetica.ejs");
})
let msg = require("./model/modulo1");