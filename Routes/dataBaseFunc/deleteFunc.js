import Person  from  '../../models/users.js'
import {userName, userLastname} from '../find.js'

//Deletes the user from the database
async function delleteUserFromDatabaseFunction() {
   try {
      return await Person.deleteOne({name:{firstName: userName, lastName: userLastname,}})
      
   } catch (error) {
      console.log(error);
   
   }
   
   
   
}


export{delleteUserFromDatabaseFunction}
