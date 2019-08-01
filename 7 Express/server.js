const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuración para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send({message:'Tu primera peticion'});
});

app.get('/home',(req,res) => {
    res.send({message:'Mensaje desde home'});
});

//Params
//http://localhost:3000/user/1912 <--- el id
app.get('/user/:uid',(req,res) => {
    console.log(req.params);
    const uid = req.params.uid
    //const {uid} = req.params
    res.send({message:`Id buscado: ${uid}`})
});

//Querys
//http://localhost:3000/search?q=gatos&color=negro&vidas=6
app.get('/search',(req,res)=> {
    console.log(req.query);
    const {q,color,vidas} = req.query
    res.send({q,color,vidas})
});

app.post('/create/user',(req,res) => {
    console.log(req.body);
    const {name,last_name,age,is_active} = req.body;
    res.status(201).send({
        id:'19',
        name,
        last_name,
        age,
        is_active
    });
});

app.patch('/modificar/user',(req,res) => {
    console.log(req.body);
    const {name,last_name,age,is_active} = req.body;
    res.send({
        id:'19',
        name,
        last_name,
        age,
        is_active
    });
});

app.listen(3000, () =>{
    console.log('Server on port 3000');
});