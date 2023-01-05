import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import  express from 'express'
import {conn} from './connnect.js'
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "hbs");
// app.use(express.static(path.resolve( "public")))
app.use(express.urlencoded({ extended: true}))



let allMiddleware = [routerdel, routerss, router, routerer,express.static(path.resolve( "public"))]

for (let i = 0; i < allMiddleware.length; i++) { 

    app.use(allMiddleware[i])
    
}


import Person  from  './models/users.js'

//Delete
import {routerdel} from './Routes/delete.js'  //booleanDeleteUser


//Adding users  
import {routerss} from './Routes/add.js'
 

//Find users
import {router, findUserBoolean, foundUser } from './Routes/find.js'



//Update
import { routerer } from './Routes/edit.js';

 

// Render home page
app.get('/', async(req, res)=>{
    const arrayUsersNames = await Person.find({}).lean()

    res.render(path.resolve('view','index.hbs'), {arrayUsersNames, findUserBoolean, foundUser }) 
})


app.listen(PORT, ()=>{
    console.log('Started...');
    conn()
})