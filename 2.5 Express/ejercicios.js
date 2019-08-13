/*
----------------------------------------------------------------
                    Backend con Express JS
----------------------------------------------------------------
*/

const express = require('express');
const bodyParser = require('body-parser');

// Instancia de express con la que configuraremos el servidor
const app = express();

// Configuración para poder recibir el cuerpo de la petición
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
----------------------------------------------------------------
    1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
----------------------------------------------------------------
*/

app.get('/api/', (req, res) => {
    res.status(200).send({ 'mensaje': 'hola mundo' });
});

/*
----------------------------------------------------------------
    2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
----------------------------------------------------------------
*/

app.get('/api/suma', (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = (parseInt(num1) + parseInt(num2));
    res.status(200).send({ resultado });
});

/*
----------------------------------------------------------------
    3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
----------------------------------------------------------------
*/

app.get('/api/usuario/:usuario', (req, res) => {
    const {usuario} = req.params;
    res.status(200).send({ usuario });
});

/*
----------------------------------------------------------------
    4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
                    }}
----------------------------------------------------------------
*/

const request = require('request');

/* app.get('/api/swapi/:people', (req, resp) => {
    const {people} = req.params;
    request.get(`https://swapi.co/api/people/${people}/`, (err, res, body) => {
        const swapi_res = JSON.parse(body);
        resp.status(200).send({ 'personaje': swapi_res });
    });
});  */

// Esta línea debe ir al final
app.listen(3000, ()=>{console.log('Servidor escuchando en puerto 3000')});