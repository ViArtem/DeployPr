import Person  from  '../../models/users.js'
import {router, userName, userLastname} from '../find.js'

//finds the user in the database
async function findsUser() {
    try {
        let findUser= await Person.findOne({name:{
            firstName:userName ,
            lastName: userLastname
       }}) 
       
       return findUser
        
    } catch (e) {
        console.log('Opss ...' + e);
        return e
        
    }
 
}
  

export {findsUser}