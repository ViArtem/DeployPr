import Person  from  '../../models/users.js'
import { idt, newN, newL, newNum } from '../edit.js'

async function edit(){
  let nn = await Person.updateOne({_id: idt}, {$set:{name: {
    firstname:newN ,
    lastname: newL
}}, number: newNum})

}

export{edit}