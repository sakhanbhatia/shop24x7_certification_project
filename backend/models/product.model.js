//Product Collection:Ajith
var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productName: {
        type:String
    },

    department: {
        type:String
    },
    price:{
        type:Number
    },
    discountPrice:{
        type: Number
    },
    image:{
        type: String
    },
    description:{
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);