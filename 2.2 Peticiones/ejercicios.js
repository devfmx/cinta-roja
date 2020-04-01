/*
----------------------------------------------------------------
                        Peticiones
----------------------------------------------------------------
*/

// Módulo empleado para hacer peticiones http
const request = require('request');

/*
----------------------------------------------------------------
1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.

                    https://pokeapi.co/
----------------------------------------------------------------
*/

const URL_POKEMON = "http://pokeapi.co/api/v2/pokemon/103/";

/* request.get( URL_POKEMON, (error, response, body) => { 
    response.statusCode == 200 
    ? console.log(                          
        `Types: ` +                         
        JSON.parse(body)                    
            .types                          
            .map(type => type.type.name)    
    )                                       
    : console.log(error);                  
});              */              
                                            



/*
----------------------------------------------------------------
2.- Hacer una funcion que haga una peticion 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    
        http://openlibrary.org/search.json?q=i+robot) 
----------------------------------------------------------------
*/

const URL_LIBRERIA = 'http://openlibrary.org/search.json?q=';

let peticionLibro = (titulo) => {

    let URL_FINAL = URL_LIBRERIA + titulo;      

    request.get(URL_FINAL, (error, response, body) => {
        if (response.statusCode == 200) {                                         
            JSON.parse(body)                      
                .docs                             
                .map(doc =>                    
                    !doc.author_name ? console.log('No tiene author_name') : doc.author_name          
                        .map(author_name =>  
                            console.log(author_name))   
                    
                );                                         
        } else console.log(response.statusCode, error);
    });
}

peticionLibro("i+robot");


/*
----------------------------------------------------------------
3.- Hacer una petición por autor y devolver la lista de 
    sus libros

        http://openlibrary.org/search.json?author=asimov
----------------------------------------------------------------
*/

let peticionAutor = (autor) => {

    let URL = 'http://openlibrary.org/search.json?author=' + autor;

    request.get(URL, (error, response, body) => {
        response.statusCode == 200
            ? console.log(          
                JSON.parse(body)    
                    .docs              
                    .map(doc => doc.title_suggest)      
            )                                           
            : console.log(error);                       
    })                                                  
}

//peticionAutor('lovecraft');

/*
----------------------------------------------------------------
4.- Hacer una peticion y devolver el género de la banda deseada

    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
----------------------------------------------------------------
*/

/* request.get('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse', (err, res, body) => {
    const respuesta = JSON.parse(body);
    const artista = respuesta.artists[0].strArtist;
    const genero = respuesta.artists[0].strGenre;
    console.log(`${artista} es de género ${genero}`);
}); */


/*
----------------------------------------------------------------
5.- Hacer una petición a la swapi a un personaje y obtener 
    sus películas.

                    https://swapi.co/
----------------------------------------------------------------
*/

const URL_SWAPI = "https://swapi.co/api/people/20/";

/* request.get(URL_SWAPI, (error, response, body) => {
    const cuerpo = JSON.parse(body);
    console.log(`El personaje ${cuerpo.name} ha aparecido en:`);
    cuerpo.films.map(film => {
        // console.log(film);
        request.get(film, (error, response, body) => {
            console.log(JSON.parse(body).title);
        });
    });
}); */

/*
----------------------------------------------------------------
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta hoy.

                    https://api.nasa.gov/
----------------------------------------------------------------
*/

const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=';
const API_KEY = 'a73nTGWyyibEkLxCGtuOgKMVdkyB0XkOtZdmVbCR';
let URL_NASA_FINAL = URL_NASA + API_KEY;

/* request.get( URL_NASA_FINAL, (error, response, body) => {
    if (response.statusCode == 200) {
        let asteroides = JSON.parse(body).near_earth_objects;

        // ¿Cómo iterar dentro de un objeto en javasript con objetos como miembros?
        // https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members
        Object.keys(asteroides).forEach(function (key) {

            // ¿Cómo convierto cadenas en una 'clave' de un objeto en javascript?
            // https://stackoverflow.com/questions/4841254/how-to-convert-string-as-objects-field-name-in-javascript
            asteroidesPeligrosos = asteroides[key].map( asteroide => {
                if (asteroide.is_potentially_hazardous_asteroid){
                    console.log(`${asteroide.name} ----- ES PELIGROSO PARA LA TIERRA` );
                } else console.log(`${asteroide.name} ----- no es peligroso`);
            })
        });
    } else console.log (error);

}); */


/*
----------------------------------------------------------------
7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un objeto con el nombre, sus moves, tipos, tamaño 
    y peso.

                      https://pokeapi.co/
----------------------------------------------------------------
*/

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

/* request.get(POKEAPI_URL, (err, res, body) => {

    const respuesta = JSON.parse(body).results;

    // Prueba el código con i<=2 
    for(let i=0; i<=151; i++){

        request.get(respuesta[i].url, (err, res, body) => {
            
            const respuesta = JSON.parse(body);
            
            let pokemon = {
                nombre: respuesta.name,
                movimientos: respuesta.moves,
                tipos: respuesta.types,
                altura: respuesta.height,
                peso: respuesta.weight
            }

            console.log(pokemon);
        });
    }
}); */
