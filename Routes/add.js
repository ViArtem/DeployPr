//A function that adds a new user
import {addUserToDatabase} from './dataBaseFunc/addUsersFunc.js'

//Аrray with first and last name
import { splitFullName } from '../otherFunc/string.js'

import {Router} from 'express'
const routerss = Router()

//Variables that will contain user data
let addFirstName
let addLastName
let addNumber

//Adding a user to the database
routerss.post('/add', async (req, res)=>{
    
    try {
        
        //Phone number validation
        const regularExpretionNumber = /^(?:\+[1-9]{1,3})?(?:[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/ ///^[\+][1-9]{1,4}\d{10,11}/
        let numberUser = req.body.userNum
        let validateUserNumber = numberUser.match(regularExpretionNumber)
       
        
        //Name validation 
        const regularExpretionName = /^[a-z]+ [a-z]+$/gi
        let userFullNameForVerification = splitFullName(req.body.userFullName).join(' ').match(regularExpretionName)
         
        //Сhecking if the data is valid, if so the user is added
        if (validateUserNumber != null && userFullNameForVerification != null){ 
            addNumber = numberUser
            addFirstName = splitFullName(req.body.userFullName)[0]
            addLastName = splitFullName(req.body.userFullName)[1]
            if (addLastName == undefined) {
                res.redirect('/')
            }else{
            let newUser = await addUserToDatabase()
            console.log(`New user added: ${newUser}`);
            res.status(200)
            res.redirect('/')
            }
        }else{
            console.log('Number or name is not valid');
            res.redirect('/')
        }
  

    } catch (error) {
        console.log('Wrong number', error);
        res.redirect('/')
    }

      
})
export{routerss, addFirstName, addLastName, addNumber} 

