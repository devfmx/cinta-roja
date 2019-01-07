const request = require('request');

const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-11-18&end_date=2018-11-21&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i'

request.get(URL,(err,response,body) => {
    const json = JSON.parse(body);
    console.log(json.near_earth_objects['2018-11-21'][0].id);
    console.log(json['near_earth_objects']['2018-11-21'][0]['id']);
});