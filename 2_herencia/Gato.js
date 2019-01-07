const {Mascota} = require('./Mascota')
//Clase hija de Mascota
class Gato extends Mascota{
    
    constructor(vidas){
        console.log('Se creo el Gato');
        this.vidas = vidas
    }

    getVidas(){
        return this.vidas
    }
}

module.exports = {
    Gato
}