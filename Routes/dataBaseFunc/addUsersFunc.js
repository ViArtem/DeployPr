import Person  from  '../../models/users.js'
import {routerss, addFirstName, addLastName, addNumber} from '../add.js'

//Аdds a user to the database
async function addUserToDatabase() {

    try {
        const newUser = await new Person({name: {
            firstName: addFirstName,
            lastName: addLastName
        },
        number: addNumber
        }) 
        await newUser.save()
        return newUser
        
    } catch (e) {
        console.log(e);
        
    }
    
}


export{addUserToDatabase}


