import db from 'mongoose'
import dotev from 'dotenv'
dotev.config()
const url = process.env.URL
//db.set('strictQuery', false);

//Database connection
async function conn() {
    try {
       await db.connect(url)  //{readPreference: 'secondaryPreferred'}
    } catch (e) {
        console.log(e);
    }
        
    }
export {conn, db}