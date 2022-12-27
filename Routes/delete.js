import {Router} from 'express'
const routerdel = Router()
import { dell } from './dataBaseFunc/deleteFunc.js'
import { fin } from './find.js'


let tr = true
routerdel.post('/delete', async (req, res)=>{
    let a = await dell()
        tr = false
        //res.redirect("/")
        res.redirect(307,"/findDel")
    


        //tr = true
     
})
export{routerdel, tr}