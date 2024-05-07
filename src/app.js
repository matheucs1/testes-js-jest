const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({successs: true});
});


app.get("/cor/:pessoa", (req, res) => {
    const pessoa = req.params.pessoa;
    if(pessoa == "matheus"){
        res.json({cor: "azul"});
    }
})
module.exports =  app;