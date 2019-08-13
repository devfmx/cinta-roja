const request = require('request');

function getNameByIdPeople(idPeople){
    const URL = `https://swapi.co/api/people/${idPeople}/`
    request.get(URL,(error,response,body) => {
        console.log(`Status code ----> ${response.statusCode}`);
        const respuestaBody = JSON.parse(body)
        if(response.statusCode === 200){
            console.log('Petición Correcta');
            console.log(respuestaBody.name);
        }else{
            console.log('Peticion incorrecta');
            console.log(respuestaBody.detail);
        }    
    });
}

function getMovesByIdPokemon(idPokemon){
    const URL_BASE = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
    request.get(URL_BASE,(error,response,body) => {
        const json = JSON.parse(body);
        const listaMoves = []
        if(response.statusCode === 200){
            for(let i = 0; i < json.moves.length; i++){
                listaMoves.push(json.moves[i].move.name)
            }
            console.log(listaMoves);
        }else{
            console.log('Petición incorrecta');
        }
    })
}


//getNameByIdPeople(9)
getMovesByIdPokemon(2)