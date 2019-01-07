const mongoose = require('mongoose');
const URL_MONGO = 'mongodb://prueba:pruebita123@ds259079.mlab.com:59079/cinta-roja'

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(err)=>{
    if (!err) console.log('Conexión exitosa');
});

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name_store:String,
    direccion:String,
    productos:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }]
    }
});

const ProductSchema = new Schema({
    name:String,
    price:Number,
    stock:Number,
},{timestamps:true});

const Product = mongoose.model('Product',ProductSchema);
const Store = mongoose.model('Store',StoreSchema);

module.exports = {Product,Store}