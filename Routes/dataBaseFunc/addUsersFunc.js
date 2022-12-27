import Person  from  '../../models/users.js'
import {routerss, addF, addL, numm} from '../add.js'
async function add() {

    const newUser = await new Person({name: {
        firstname:addF ,
        lastname: addL
    },
    number:  numm
    }) 
    await newUser.save()
    
}


export{add}


