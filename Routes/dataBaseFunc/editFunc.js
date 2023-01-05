import Person  from  '../../models/users.js'
import { userIdWeAreUpdating, newUserFirstName, newUserLastName,  newUserNum } from '../edit.js'

//Сhanges the user in the database
async function editUser(){
  try {
    let newUpdatedUser = await Person.updateOne({_id: userIdWeAreUpdating}, {$set:{name: {
      firstName:newUserFirstName ,
      lastName: newUserLastName
  }}, number: newUserNum})

  return newUpdatedUser
    
  } catch (e) {
    console.log(e);
    
  }
  

}

export{editUser}