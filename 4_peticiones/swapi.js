const request = require('request');

const URL = 'https://swapi.co/api/people/1/'

request.get(URL,(err,response,body) => {
    const json = JSON.parse(body);
    console.log(json.name);
    request.get(json.films[0],(err,response,body) => {
        const json2 = JSON.parse(body);
        console.log(json2.title);
    });
});