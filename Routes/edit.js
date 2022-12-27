import {Router} from 'express'
import { ff } from './find.js'
import { createRequire } from 'node:module';
import { edit } from './dataBaseFunc/editFunc.js'
import { splitFN } from '../otherFunc/string.js';


const require = createRequire(import.meta.url);
const path = require('path')
const routerer = Router()

let idt
let newN
let newL
let  newNum
routerer.get('/update', async (req, res)=>{

    res.render(path.resolve('view','edit.hbs'))
     idt = ff.id

})

routerer.post('/updateCancel', async (req, res)=>{
    update = true
    res.redirect(307,'/findDel')
   // res.redirect('/')

})

routerer.post('/updat', async (req, res)=>{
    const jsonContent = JSON.stringify(ff);

    res.end(jsonContent);
     idt = ff.id

})

let update = false
routerer.post('/update', async (req, res)=>{
    newN = splitFN(req.body.newUserFN)[0]
    newL = splitFN(req.body.newUserFN)[1]
    newNum = req.body.NewUserNum

    if (newL == undefined) {
        console.log('Enter fullname');
        res.redirect('/update')
    }else{
        await edit()
        update = true
        res.redirect(307,'/findDel')
    }
   
    
    

})



export{routerer, idt, newN, newL,  newNum, update }