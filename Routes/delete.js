import {Router} from 'express'
const routerdel = Router()
import { delleteUserFromDatabaseFunction } from './dataBaseFunc/deleteFunc.js'
import { findUserBoolean } from './find.js'


let booleanDeleteUser = true
//Handles a request to delete a user
routerdel.delete('/delete', async (req, res)=>{
try {
    let deleteUserFunc = await delleteUserFromDatabaseFunction()
    booleanDeleteUser = false
    res.sendStatus(200)
    console.log(deleteUserFunc);
    //res.redirect("/findDel") 
    
} catch (error) {
    console.log(error);
    res.sendStatus(error.status)
}


    


     
})
export{routerdel, booleanDeleteUser}