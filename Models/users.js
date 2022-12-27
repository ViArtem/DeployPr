import {Schema, model} from 'mongoose'
const shem = new Schema({
    name: {
        firstname: String,
        lastname: String
    },
    number: Number

})


export default model('User', shem)