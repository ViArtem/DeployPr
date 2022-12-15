const db = require('mongoose')
const dotev = require('dotenv')
dotev.config()
const url = process.env.URL
db.set('strictQuery', false);
async function conn() {
    try {
       await db.connect(url) 
    } catch (e) {
        console.log(e);
    }
        
    }
module.exports ={conn, db}