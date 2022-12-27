import Person  from  '../../models/users.js'
import {router, userName, userLastname} from '../find.js'

async function finds() {
    let findUser= await Person.findOne({name:{
        firstname:userName ,
        lastname: userLastname
   }}) 
   //console.log(findUser); 
   return findUser 
}
  




export {finds}