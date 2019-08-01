/*
----------------------------------------------------------------
                        Promesas
----------------------------------------------------------------
*/

// Módulo empleado para hacer peticiones http
const request = require('request');

/*
----------------------------------------------------------------
    Escribe el código del CRUD de la siguiente API genérica:
        https://goodreads-devf-aaron.herokuapp.com/docs/ 

    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa. 
----------------------------------------------------------------
*/

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var URL_FINAL = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL_FINAL, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201
                ? resolve(json)
                : reject('Error al crear un nuevo autor')
        })
    })
}

/* createAuthor("prueba crear","last name primera","MX","bio primera","M",53)
     .then(nuevoAutor => console.log(nuevoAutor))
     .catch(error =>console.log(error)) */


/*
----------------------------------------------------------------
    2.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor. 
----------------------------------------------------------------
*/

function readAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(URL_FINAL, (error, response, body) => {

            // If ES6 (Operador Ternario)
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject(`404: El autor con id ${id} no existe.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

/*  readAuthor(1007)
     .then(autor=>console.log(autor))
     .catch(error =>console.log(error)) */

/*
----------------------------------------------------------------
    3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor 
        modificado en una promesa.
----------------------------------------------------------------
*/

function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject) => {
        request.put({ url: urlendpoint2, form: jsonUpdate }, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject(`Error en Update: El autor con id ${id} no pudo ser actualizado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

// updateAuthor(1007,"Don Spamer 3","SpamSpamSpam","MX","Borrar por favor","M",56,true)
//     .then(autor=>console.log(autor))
//     .catch(error =>console.log(error))

/*
----------------------------------------------------------------
    4.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para eliminar un
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.
----------------------------------------------------------------
*/

function deleteAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.delete(URL_FINAL, (error, response, body) => {
            response.statusCode == 204
                ? resolve("Autor eliminado exitosamente")
                : reject(`Error al eliminar: El autor con id ${id} no pudo ser eliminado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

//eliminarAuthor(1028)
//   .then(autor=>console.log(autor))
//   .catch(error =>console.log(error))

/*
----------------------------------------------------------------
    5.- Encadenando promesas, es decir, usando las funciones
        que escribiste en los puntos previos:  
        
        Crea un autor nuevo, luego modifica su nombre y 
        apellido y finalmente elimínalo. Muestra en consola 
        el resultado de cada petición (creación, modificación 
        y eliminación).
----------------------------------------------------------------
*/

/* createAuthor('Mauricio', 'Villarreal', 'MX', 'Sensei', 'M', 1)
    .then( autorCreado => {
        return updateAuthor(autorCreado.id, 'Maui', 'Saavedra')})
    .then( autorActualizado => {
        return deleteAuthor(autorActualizado.id)})
    .then( autorEliminado => {
        console.log(autorEliminado);})
    .catch( error => console.log(error)); */
