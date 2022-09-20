const express = require("express");
const app = express();
//create router
const path = require('path');
const quotes = require("./quotes");
const {connectToMongoDb , closeMongoDbConnection} = require("./mongoConnectionManager");
const {createLog, getAllLogs, updateLog, deleteLog} = require("./logsCRUDManager");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

console.log(quotes.getQuote())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/logs", async (req, res) => {
    try {
        const allLogs = await getAllLogs();
        res.render("public/logs/index" , {allLogs : allLogs});
        
    } catch (error) {
        console.error("Failed to get all logs! " + error);
    }
});

/*app.use((req, res) => {
    console.log("A new request was received!")
 });*/



app.listen(3000, (req, res)=>{
    console.log("Listening on port 3000!")
})

