import {Router} from 'express'
const router = Router()
import {findsUser} from './dataBaseFunc/findFunc.js'
import { splitFullName } from '../otherFunc/string.js'
import { booleanDeleteUser } from './delete.js'
import { update } from './edit.js'


let findUserBoolean = false
let foundUser 
let userName
let userLastname

//Processes a request to find a user
router.post('/find', async (req, res)=>{
    try {
        userName = splitFullName(req.body.findUserFullName)[0]
        userLastname = splitFullName(req.body.findUserFullName)[1]
        // Тhe found user object
        foundUser  = await findsUser()
          

        if (foundUser  != null ) {

            findUserBoolean = true
            console.log(`user ${foundUser} found`);
            res.redirect('/')

        }else
        res.redirect('/')

        
    } catch (e) {
        console.log(e);
        res.redirect('/')
    }

})


// Tracks whether a user has been deleted or updated and changes the values ​​of variables based on this
router.post('/findDel', async (req, res)=>{

    try {

        if (booleanDeleteUser == false && update == false) {
            findUserBoolean = false
            res.sendStatus(200)
          
        }else if(update){
            findUserBoolean = false
            res.redirect('/')
        }else
        res.redirect('/')

        
    } catch (e) {
        console.log(e);
        res.redirect('/')
    }

})

export {router, userName, findUserBoolean, foundUser, userLastname}