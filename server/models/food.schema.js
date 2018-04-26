const mongoose = require('mongoose'); //connecting Schema to Mongoose
const Schema = mongoose.Schema

const foodSchema = new Schema({ //class object that defines what can be added to our collection
    name : {type: String, required: true, unique: true},
    deliciousness_rating: {type: Number, required:true},
    is_hot: {type: Boolean, required:true}
})

module.exports = mongoose.model('foods', foodSchema); // calling collection and what schema is associated with it. 

