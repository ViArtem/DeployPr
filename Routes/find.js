import {Router} from 'express'
const router = Router()
import {finds} from './dataBaseFunc/findFunc.js'
import { splitFN } from '../otherFunc/string.js'
import { tr } from './delete.js'
import { update } from './edit.js'


let fin = false
let ff 
let userName
let userLastname
router.post('/find', async (req, res)=>{
    userName = splitFN(req.body.findUserFN)[0]
    userLastname = splitFN(req.body.findUserFN)[1]
        ff = await finds()
        //console.log(ff);

    if (ff != null ) {
        fin = true

       // console.log(findUser);
        res.redirect('/')
    }else
    res.redirect('/')

})

router.post('/findDel', async (req, res)=>{

    if (tr == false || update) {
        fin = false

       // console.log(findUser);
        res.redirect('/')
    }else
    res.redirect('/')

})

export {router, userName, fin, ff, userLastname}