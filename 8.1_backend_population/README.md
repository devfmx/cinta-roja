# Express y mongo (population) #

***¿Qué es?***
MongoDB es una base de datos no relacional, es decir no es como las típicas bases de datos SQL (MySQL, Oracle, PostgreSQL, etc...) donde existen relaciones entre una tabla y otra. Veamos un ejemplo clásico.

Imaginemos una base de datos de libros. Tendríamos una tabla con los títulos de los libros y otra con los datos de los autores. El campo autor en la tabla de libros, apuntaría a un ID o clave primaria de un autor de la tabla autores.

En MongoDB podemos hacer algo parecido, por medio de referencias y el método populate de MongoDB.

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autorSchema = new Schema({
	nombre: String,
    biografia: String,
    fecha_de_nacimiento: Date,
    nacionalidad: String
});

module.exports = mongoose.model('Autor', autorSchema);
```


```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Autor = mongoose.model('Autor');

var libroSchema = new Schema({
	titulo: String
    paginas: Number,
    isbn: String,
    autor: { type: Schema.ObjectId, ref: "Autor" } 
});
module.exports = mongoose.model("Libro", libroSchema);

```

El query si treaemos todos se vería de la siguiente manera
```javascript
Libro.find({}, function(err, libros) {
    	res.status(200).send(libros)
    });
```

```json
[{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Juego de Tronos",
    "paginas": 150,
    "isbn": "0-553-57340-4", 
    "autor": "547db17cbe9958b000001"
},
{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Choque de Reyes",
    "paginas": 340,
    "isbn": "0-553-57340-5",
    "autor": "547db17cbe9958b000001"
},
{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Tormenta de Espadas",
    "paginas": 620,
    "isbn": "0-553-57340-7",
    "autor": "547db17cbe9958b000001"
}]
```

En el campo autor obtenemos la referencia en formato ObjectID del autor, pero no su ficha completa. ¿Qué pasa si queremos mostrar en un sólo JSON toda la información para poder pintarla de una sola llamada en nuestra webapp? Para eso necesitamos hacer uso del método populate de MongoDB que también implementa la librería mongoose.


```javascript
Libro.find({}, function(err, libros) {
    	Autor.populate(libros, {path: "autor"},function(err, libros){
        	res.status(200).send(libros);
        }); 
    });
```

```json
[{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Juego de Tronos",
    "paginas": 150,
    "isbn": "0-553-57340-4", 
    "autor": {
    	"_id": "547db17cbe9958b000001",
        "__v": 0,
        "nombre": "George R. R. Martin",
        "biografia": "American novelist...",
        "fecha_de_nacimiento": "1948-09-20T00:00:00.000Z",
        "nacionalidad": "USA"
    }
},
{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Choque de Reyes",
    "paginas": 340,
    "isbn": "0-553-57340-5",
    "autor": {
    	"_id": "547db17cbe9958b000001",
        "__v": 0,
        "nombre": "George R. R. Martin",
        "biografia": "American novelist...",
        "fecha_de_nacimiento": "1948-09-20T00:00:00.000Z",
        "nacionalidad": "USA"
    }
},
{
    "_id": "547db17cbe9956a000001",
    "__v": 0
    "titulo": "Tormenta de Espadas",
    "paginas": 620,
    "isbn": "0-553-57340-7",
    "autor": {
    	"_id": "547db17cbe9958b000001",
        "__v": 0,
        "nombre": "George R. R. Martin",
        "biografia": "American novelist...",
        "fecha_de_nacimiento": "1948-09-20T00:00:00.000Z",
        "nacionalidad": "USA"
    }
}]
```

***Quiero saber mas...***
(https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7)
(https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb/)