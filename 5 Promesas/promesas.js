const request = require('request');

//CALLBACK HELL
// function getNameMovie(){
// request.get(URL,(err,response,body) => {
//     const json = JSON.parse(body);
//     console.log(json.name);
//     request.get(json.films[0],(err,response,body) => {
//         const json2 = JSON.parse(body);
//         console.log(json2.title);
//     });
// });
// }

function getPeopleById(idPeople){
    return new Promise((resolve,reject) => {
        const URL = `https://swapi.co/api/people/${idPeople}/`
        request.get(URL,(err,response,body) => {
            const json = JSON.parse(body);
            if(response.statusCode === 200){
                resolve(json);
            }else{
                reject('Status code diferente de 200');
            }
        });
    });    
}

function getMovieByUrl(url){
    return new Promise((resolve,reject) => {
        request.get(url, (err,response,body) => {
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject('Error en la petición de la Movie')
        });
    });
}

// getPeopleById(1)
//     .then(respuesta => {
//         console.log(respuesta.name);
//         return getMovieByUrl('https://swapi.co/api/people/999/')
//     })
//     .then(respuesta2 => {
//         console.log(respuesta2.title);
//     })
//     .catch(err => {
//         console.log('Error: ' +  err);
//     })

getPeopleById(1)
    .then(respuesta => getMovieByUrl(respuesta.films[0]))
    .then(respuesta2 => console.log(respuesta2.title))
    .catch(err => console.log('Error: ' +  err))

