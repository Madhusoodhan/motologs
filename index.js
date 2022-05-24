const express = require("express");
const app = express();
const path = require('path');
const quotes = require("./quotes");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

console.log(quotes.getQuote())

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/logs", (req, res) => {
    res.render("logs/index");
});

app.use((req, res) => {
    console.log("A new request was received!")
 });



app.listen(3000, (req, res)=>{
    console.log("Listening on port 3000!")
})

