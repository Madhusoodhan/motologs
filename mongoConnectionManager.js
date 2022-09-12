const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://Madhusoodhan:Saimsjrk_32@motologs.q0fna.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const connectToMongoDb = async function (){
    try {
        await client.connect();
        console.log("Successfully connected to database!");
        return client;
    } catch (error) {
        console.error(error)
    } 
}

const closeMongoDbConnection = async function (){
    try {
        await client.close();
        console.log("Connection to database closed!");
    } catch (error) {
        console.error(error)
    }
}

module.exports = { connectToMongoDb, closeMongoDbConnection };