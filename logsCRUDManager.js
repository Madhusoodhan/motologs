const {connectToMongoDb , closeMongoDbConnection} = require("./mongoConnectionManager");

//Create
const createLog = async function(client, log) {
    try {

        await connectToMongoDb();
        await client.db("motologs").collection("logs").insertOne(log);
        console.log("Inserted log : " + log);
        
    } catch (error) {
        console.error("Failed to insert log! " + error);
    } finally {
        await closeMongoDbConnection();
    }
}

//Read
const getAllLogs = async function() {
    try {
        const client = await connectToMongoDb();
        const cursor = client.db("Motologs").collection("logs").find();
        const allLogs = await cursor.toArray();
        //if empty throw error
        console.log("Got all logs : " + allLogs);
        
    } catch (error) {
        console.error("Failed to get all logs! " + error);
    } finally {
        await closeMongoDbConnection();
    }
}

//Update
const updateLog = async function(client, updatedLog) {
    try {
        await connectToMongoDb();
        await client.db("motologs").collection("logs").updateOne()
        
    } catch (error) {
        
    } finally {
        await closeMongoDbConnection();
    }
}

//Delete
const deleteLog = async function(client, logName) {
    try {
        await connectToMongoDb();
        await client.db("motologs").collection("logs").deleteOne({name : logName});
        console.log("Deleted log : " + logName);
        
    } catch (error) {
        console.error("Failed to delete log! " + error);
    } finally {
        await closeMongoDbConnection();
    }
}

module.exports = {createLog, getAllLogs, updateLog, deleteLog};