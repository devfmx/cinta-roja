class Perro{
    constructor(raza,color,nombre){
        //Definicion de los primeros atributos
        this.color = color
        this.raza = raza
        this.nombre = nombre
    }

    //Definición de los metodos del Perro
    ladrar(){
        return 'Waau'
    }

    comer(comida){
        return `${this.nombre} está comiendo ${comida}`
    }

    getColor(){
        return this.color
    }

    setColor(newColor){
        this.color = newColor
    }

    setPatas(numPatas){
        this.patas = numPatas
    }
}

const ayudanteSanta = new Perro('Galgo','Cafe','Ayudante de santa');
const snoopy = new Perro('Beagle','Blanco y negro','Snoopy');

console.log('Ayudante de santa: ', ayudanteSanta);
console.log('Ayudante de santa: ', ayudanteSanta.createPatas(4));
console.log('Ayudante de santa: ', ayudanteSanta);

//console.log('Snoopy: ', snoopy.comer('Croquetas'));
