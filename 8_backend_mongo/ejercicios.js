/*
----------------------------------------------------------------
                Backend con Express JS & MongoDB

    1) Crear una base de datos para un supermercado que pueda 
    almacenar lo siguiente:

    - Artículo
        -Nombre (string)
        -Precio (number)
        -Existencias (number)
    - Ticket
        -subtotal (number)
        -IVA (number)
        -total (number)
        -articulos (articulo)
----------------------------------------------------------------
*/

const mongoose = require('mongoose');

const URL = 'mongodb://mauricio:abc123@ds027748.mlab.com:27748/tiendita';
mongoose.connect(URL, () => { console.log("----- Base de Datos Conectada -----") });

const articuloSchema = mongoose.Schema({
    articulo: mongoose.Schema.ObjectId,
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencias: { type: Number, default: 10 }
});

const ticketSchema = mongoose.Schema({
    ticket: mongoose.Schema.ObjectId,
    subtotal: { type: Number, default: 0 },
    iva: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    articulos: [{ type: mongoose.Schema.ObjectId, ref: 'Articulo', required: true }]
});

const Articulo = mongoose.model('Articulo', articuloSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

/*
----------------------------------------------------------------
    2) Crear una API que permita realizar las operaciones      
       elementales CRUD sobre artículos y ticket.
----------------------------------------------------------------
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("GET Exitoso!");
});

// ------------------- CRUD ARTICULOS --------------------

// POST ONE
app.post('/api/articulos/', (req, res) => {
    const jsonCliente = req.body;

    const nuevoArticulo = Articulo(jsonCliente);

    nuevoArticulo.save((error, articulo) => {
        res.status(201).send(articulo);
    });
});

// GET ALL 
app.get('/api/articulos/', (req, res) => {
    Articulo
        .find()
        .exec()
        .then(listaArticulos => res.status(200).send(listaArticulos))
        .catch(error => res.status(400).send(error));
});

// GET ONE
app.get('/api/articulos/:id/', (req, res) => {
    const articuloId = req.params.id;

    Articulo
        .findById(articuloId)
        .exec()
        .then(articulo => res.status(200).send(articulo))
        .catch(error => res.status(404).send(error));
});


// UPDATE ONE
app.put('/api/articulos/:id/', (req, res) => {

    const articuloId = req.params.id;

    Articulo
        .findByIdAndUpdate(
            articuloId,
            { $set: req.body },
            { new: true })
        .exec()
        .then(articuloActualizado => res.status(200).send(articuloActualizado))
        .catch(error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/articulos/:id/', (req, res) => {
    const articuloId = req.params.id;

    Articulo
        .findByIdAndDelete(articuloId)
        .exec()
        .then(articulo => res.status(204).send('Artículo eliminado exitosamente.'))
        .catch(error => res.status(404).send(error));
});


// -------------------- CRUD TICKETS ---------------------

// POST ONE
app.post('/api/tickets/', (req, res) => {
    const jsonCliente = req.body

    const nuevoTicket = Ticket(jsonCliente);

    nuevoTicket.save((error, ticket) => {
        res.status(201).send(ticket);
    });
});


// GET ALL
app.get('/api/tickets/', (req, res) => {
    Ticket
        .find()
        .populate('articulos')
        .exec()
        .then(listaTickets => res.status(200).send(listaTickets))
        .catch(error => res.status(400).send(error));
});

// GET ONE
app.get('/api/tickets/:id/', (req, res) => {
    const ticketId = req.params.id;

    Ticket
        .findById(ticketId)
        .populate('articulos')
        .exec()
        .then(ticket => res.status(200).send(ticket))
        .catch(error => res.status(404).send(error));
});

// UPDATE ONE
app.put('/api/tickets/:id/', (req, res) => {

    const ticketId = req.params.id;

    Ticket
        .findByIdAndUpdate(
            ticketId,
            { $set: req.body },
            { new: true })
        .exec()
        .then(ticketActualizado => res.status(200).send(ticketActualizado))
        .catch(error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/tickets/:id/', (req, res) => {
    const ticketId = req.params.id;

    Ticket
        .findByIdAndDelete(ticketId)
        .exec()
        .then(ticket => res.status(204).send('Ticket eliminado exitosamente.'))
        .catch(error => res.status(404).send(error));
});

/*
----------------------------------------------------------------
                        Backend Population

    3) Mediante un ENDPOINT calcular el subtotal, IVA y total de
       algún ticket.

    COMO REGLA DE NEGOCIO los documentos "Ticket" deben inicializar
    subtotal, IVA y total en 0.

    NOTA: Al hacer la petición del paso 3) se debe actualizar
    el contenido del ticket según los artículos que contenga
----------------------------------------------------------------
*/

// ----- CALCULAR SUBTOTAL, IVA Y TOTAL DE TICKET ------
app.get('/api/tickets/factura/:id/', (req, res) => {

    const ticketId = req.params.id;
    let subtotal = 0, iva = 0, total = 0;

    Ticket
        .findById(ticketId)
        .populate('articulos')
        .exec()
        .then(ticket => {

            ticket.articulos.map(articulo => {
                subtotal += articulo.precio
            });

            iva = (subtotal * 0.16);
            total = subtotal + iva;

            Ticket
                .findByIdAndUpdate(
                    ticket._id,
                    {
                        subtotal: subtotal,
                        iva: iva,
                        total: total
                    },
                    { new: true })
                .populate('articulos')
                .exec()
                .then(ticketCalculado => res.status(200).send(ticketCalculado))
                .catch(error => res.status(404).send(error));
        })
        .catch(error => res.status(400).send(error));
});


// Estas líneas de código van al final 
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});