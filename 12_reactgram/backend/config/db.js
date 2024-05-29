const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dpPassword = process.env.DB_PASS;

const conn = async() => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dpPassword}@cluster0.ykcgasr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("Connection stablished!");
    } catch(error) {
        console.log(error);
    }
}

conn();

module.exports = conn;