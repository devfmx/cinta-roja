const {Pelicula} = require('./Pelicula');
const {Documental} = require('./Documental');

class Cine{
    constructor(sala){
        this.sala = sala
    }

    reproducir(largometraje){
        console.log(`Se está reproduciendo ${largometraje.getTitle()}`);
    }
}


const hercules = new Pelicula('Hercules','90 min','Animacion');
const caidaHitler = new Documental('La caida de hitler','Juanito Perez');

const cinepolis = new Cine(7);
cinepolis.reproducir(caidaHitler)