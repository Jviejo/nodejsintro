const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/welcome", (req, res) => {
    res.send("hola a todos!");
});

app.get("/fallara", (req, res) => {
    
    res.status(500).send("Error");
});


app.listen(4444, () => {
    console.log('Server running on port 4444');
});
