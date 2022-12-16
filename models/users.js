const {Schema, model} = require('mongoose')
const shem = new Schema({
    name: {
        firstname: String,
        lastname: String
    },
    number: Number

})

module.exports = model('User', shem)