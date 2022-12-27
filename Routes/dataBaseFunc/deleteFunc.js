import Person  from  '../../models/users.js'
import {userName,userLastname, ff, fin} from '../find.js'

async function dell() {
   
   return await Person.deleteOne({name:{firstname: userName, lastname: userLastname,}})
   
}


export{dell}
