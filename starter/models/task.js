const mongooes = require('mongoose');


const TaskSchema = new mongooes.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20, 'name can not be more then 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongooes.model('task',TaskSchema)