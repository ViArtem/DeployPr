import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import  express from 'express'
import {conn} from './connnect.js'
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "hbs");
app.use(express.static(path.resolve( "public")))
app.use(express.urlencoded({ extended: true}))

import {fin, ff} from './Routes/find.js'

//import {finds} from './Routes/dataBaseFunc/findFunc.js'
import Person  from  './models/users.js'

//Delete
import {routerdel, tr} from './Routes/delete.js'
app.use(routerdel)


// Render home page
app.get('/', async(req, res)=>{
    const usersN = await Person.find({}).lean()
    let delUser = tr
    if(delUser == false){
        delUser = true
    }
    res.render(path.resolve('view','index.hbs'), {usersN, fin,  ff, tr, delUser}) //number: num, name: nam findUser
})

//редактувати видаляти 
//окремі роути
//окремо додати роботу з базою і додати модулем в роут
//все через es модулі
//

//Adding users  
import {routerss} from './Routes/add.js'
app.use(routerss) 

//Find users
import {router} from './Routes/find.js'
app.use(router) 


//Update
import { routerer } from './Routes/edit.js';
app.use(routerer) 


app.listen(PORT, ()=>{
    console.log('Started...');
    conn()
})