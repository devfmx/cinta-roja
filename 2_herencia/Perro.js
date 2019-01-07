const {Mascota} = require('./Mascota')
//Clase hija de Mascota
class Perro extends Mascota{

    constructor(raza,color,nombre){
        super(4,nombre);
        console.log('Se creo el Perro');
        this.raza = raza;
        this.color = color;
    }

    getRaza(){
        return this.raza
    }
}

module.exports = {
    Perro
}