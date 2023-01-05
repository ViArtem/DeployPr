import {Router} from 'express'
import { foundUser  } from './find.js'
import { createRequire } from 'node:module';
import { editUser } from './dataBaseFunc/editFunc.js'
import { splitFullName } from '../otherFunc/string.js';


const require = createRequire(import.meta.url);
const path = require('path')
const routerer = Router()

let  userIdWeAreUpdating
let newUserFirstName
let newUserLastName
let  newUserNum
let update = false

//Render the update page
routerer.get('/updateRenderPage', async (req, res)=>{
    try {
        res.render(path.resolve('view','edit.hbs'))
        userIdWeAreUpdating = foundUser.id
   
    } catch (error) {
        console.log(error);
    }

})

//Нandles the update cancellation request
routerer.post('/updateCancel', async (req, res)=>{
    try {
        update = true
        res.redirect(307,'/findDel')
        
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }

  

})

//Sends user data that needs to be updated to fill in the form fields
routerer.post('/updateFieldFilling', async (req, res)=>{
    try {
        const jsonContent = JSON.stringify(foundUser );
        res.end(jsonContent);
        userIdWeAreUpdating = foundUser.id
        
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }


})



// Handles a user update request
routerer.post('/update', async (req, res)=>{
    try {
        //New phone number validation
        const regularExpretionNumber = /^(?:\+[1-9]{1,3})?(?:[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/ ///^[\+][1-9]{1,4}\d{10,11}/
        let numberUser = req.body.NewUserNum
        let validateNewUserNumber = numberUser.match(regularExpretionNumber)

        
        //New name validation 
        const regularExpretionName = /^[a-z]+ [a-z]+$/gi
        let userFullNameForVerification = splitFullName(req.body.newUserFN).join(' ').match(regularExpretionName)
        

        if (validateNewUserNumber != null && userFullNameForVerification != null) {
            
            newUserFirstName = splitFullName(req.body.newUserFN)[0]
            newUserLastName = splitFullName(req.body.newUserFN)[1]
            newUserNum = req.body.NewUserNum
    
            if (newUserLastName == undefined) {
                console.log('Enter fullname');
                res.redirect('/updateRenderPage')
            }else{
                await editUser()
                console.log('The user is updated');
                update = true
                res.redirect(307,'/findDel')
            }
        }else{
            console.log('Number or name is not valid');
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }   

})



export{routerer, userIdWeAreUpdating, newUserFirstName, newUserLastName,  newUserNum, update }