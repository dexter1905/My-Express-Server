const express = require('express');
const app = express();
app.get("/", (req, res) => {
    //console.log(req);
    res.send("<h1>Hello World</h1>");
});
app.get("/about", (req, res) => {
    //console.log(req);
    res.send("<h1>My name is Debaditya</h1>");
});
app.get("/contact", (req, res) => {
    //console.log(req);
    res.send("<h1>Contact me: debadsen@gmail.com</h1>");
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});