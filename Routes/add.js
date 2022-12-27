import {Router} from 'express'
import {add} from './dataBaseFunc/addUsersFunc.js'
import { splitFN } from '../otherFunc/string.js'
const routerss = Router()
let addF
let addL
let numm
routerss.post('/add', async (req, res)=>{
    
    try {
    
        addF = splitFN(req.body.userFN)[0]
        addL = splitFN(req.body.userFN)[1]
        numm = req.body.userNum

        if (addL == undefined) {
            res.redirect('/')
        }else{
        add()
        res.redirect('/')
        }

    } catch (error) {
        console.log('Wrong number', error);
        res.redirect('/')
    }

      
})
export{routerss, addF, addL, numm} 

