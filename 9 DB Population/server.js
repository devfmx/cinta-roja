const express = require('express');
const bodyParser = require('body-parser');
const {Product,Store} = require('./Store');
const PORT = 3000

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send({message:'Server on C:'})
});

app.post('/create/store',(req,res) => {
    const {name_store,direccion,productos} = req.body;
    const newStore = Store({name_store,direccion,productos});
    newStore.save((err,store) => {
        err
        ? res.status(409).send(err)
        : res.status(201).send(store)
    });
});

app.get('/store/:idStore',(req,res) => {
    const {idStore} = req.params;
    Store.findById(idStore)
        .populate('productos')
        .exec()
        .then(store => res.send(store))
        .catch(err => res.status(409).send(err))
});

app.post('/create/product',(req,res) => {
   const {name,price,stock} = req.body; 
   const newProduct = Product({name,price,stock});
   newProduct.save((err,product) => {
       err 
       ? res.status(409).send(err) 
       : res.status(201).send(product)
   });
});

app.get('/all/products',(req,res) => {
    Product.find().exec()
        .then(products => res.send(products))
        .catch(err => res.status(409).send(err))
});

app.get('/product/:id',(req,res) => {
    const {id} = req.params;
    Product.findById(id).exec()
        .then(product => product ? res.send(product) : res.status(404).send({message:'Product not found'}))
        .catch(err => res.status(409).send(err))
});

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});