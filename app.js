const express = require('express');
const app = express();

/*
app.get('/',function(req,res){
    res.end("chat inciado");
});*/

app.use(express.static(__dirname + "/public"));

app.listen(3000,function() {
    console.log('El servidor se ha iniciado');
});