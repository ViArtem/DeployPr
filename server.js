const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 9001
const {conn} = require(path.resolve('connnect.js'))



const Person = require(path.resolve('Models', 'users.js'))


app.set("view engine", "hbs");
app.use(express.static(path.resolve( "public")))

app.use(express.urlencoded({ extended: true}))

let fin = false

let findUser

app.get('/', async(req, res)=>{
    const usersN = await Person.find({}).lean()
    console.log(usersN);
    res.render(path.resolve('view','index.hbs'), {usersN, fin, findUser }) //number: num, name: nam
})

//Adding users
app.post('/add', async (req, res)=>{
  
    try {
        let number  = Number(req.body.userNum)
        const newUser = await new Person({name: {
            firstname:req.body.userFN ,
            lastname: req.body.userLN
        },
        number:  number
    }) 
    await newUser.save() 
    res.redirect('/')
    } catch (e) {
        res.redirect('/')
    }
    


    
})

//Find users
app.post('/find', async (req, res)=>{
    
    findUser = await Person.findOne({name:{
        firstname:req.body.findUserFN ,
        lastname: req.body.findUserLN
    }})
    console.log(findUser);
    if (findUser != null) {
        fin = true
       // console.log(findUser);
        res.redirect('/')
    }else
    res.redirect('/')

})


app.listen(PORT, ()=>{
    console.log('Started...');
    conn()
})