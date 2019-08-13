/*

                        Herencia

------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio(){

        let sumaTotal = 0;

        for(let i=0; i<this.calificaciones.length; i++){
            sumaTotal += this.calificaciones[i];
        }

        return (sumaTotal/this.calificaciones.length);
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new MaestroDeMusica('musica', [9,10,9,8,9,9,6,7,10], 2);

/* console.log( profe_1.calcularPromedio() );
console.log( profe_2.calcularPromedio() ); */

/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/

class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }

    getConsumoEnergetico(){
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(precio){
        this.consumoEnergetico = precio;
    }
}

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal() {
        return 'Total: $' + this.getConsumoEnergetico() * this.carga;
    }
}

/* const lavadora = new Lavadora(7800, 'blanco', 20, 6);
lavadora.setConsumoEnergetico(100);
console.log( lavadora.precioFinal()); */

/*
------------------------------------------------------------
4.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros 
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
------------------------------------------------------------
*/

class Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho){
        this.puertas = puertas;
        this.ventanas = ventanas;
        this.pisos = pisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    getMetrosCuadrados(){
        return this.ancho * this.altura; 
    }
}

class Edificio extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

class Casa extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

/* const casa = new Casa(3, 5, 2, "Sol de Verano 350", 5, 120, 50);
casa.setDireccion('Nueva direccion');
console.log( casa.getDireccion() ); */

/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
------------------------------------------------------------
*/

class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }
    
    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }

    setPorcentajeAlcohol(porcentaje){
        this.porcentajeAlcohol = porcentaje;
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }

    getAzucar(){
        return this.azucar;
    }

    setAzucar(azucar){
        this.azucar = azucar;
    }
}

/* const cerveza = new Cerveza(355, 4.7);
console.log( cerveza.getPorcentajeAlcohol() );
const refresco = new Refresco(600, 20);
console.log( refresco.getAzucar() ); */