const {MongoClient} = require('mongodb');

async function main(){
    const uri = 'mongodb+srv://Madhusoodhan:Saimsjrk_32@motologs.q0fna.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Successfully connect to database!");
    } catch (error) {
        console.error(error)
    } finally() {
        await client.close();
    }

}

main();