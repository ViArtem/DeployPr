import Person  from  '../../models/users.js'
import {routerss, addFirstName, addLastName, addNumber} from '../add.js'
import {largeFirstLiters} from '../../otherFunc/AllLargeLieter.js'

//Аdds a user to the database
async function addUserToDatabase() {
    
    try {
        const newUser = await new Person({name: {
            firstName: largeFirstLiters(addFirstName)  ,
            lastName: largeFirstLiters(addLastName) 
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


