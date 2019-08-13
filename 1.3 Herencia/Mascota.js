//Clase padre o super clases
class Mascota{
    constructor(patas,nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la Mascota');
    }

    getNombre(){
        return this.nombre
    }
}

//Prepara la class Mascota para poder ser llamada en otro archivo 
module.exports = {
    Mascota
}
