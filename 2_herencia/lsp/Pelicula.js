const {Largometraje} = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(title,duracion, genero){
        super(title);
        this.duracion = duracion
        this.genero = genero
    }

    getGenero(){
        return this.genero
    }

}
module.exports= {
    Pelicula   
}