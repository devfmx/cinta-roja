/*

                        Callbacks

------------------------------------------------------------
1.- Muestra un mensaje en consola mediante un callback 
------------------------------------------------------------
*/

let callback = () => {
    console.log("Este es mi mensaje dentro de un callback");
}

function mostrarMensaje(callback){
    callback();
}

//mostrarMensaje(callback);


/*
------------------------------------------------------------
2.- Crear una función de orden superior que reciba como
    argumento un mensaje y callback. Según el callback que
    se pase como argumento, la función de orden superior
    debe mostrar el mensaje en un console.warn o en un console.log
------------------------------------------------------------
*/

let ordenSuperior = (mensaje, callback) => {
    callback(mensaje);
}

let escribirLog = (mensaje) => {
    console.log(mensaje);
} 

let escribirWarning = (mensaje) => {
    console.warn(mensaje);
}

/* ordenSuperior('Este mensaje va en un console.warn!', escribirWarning);
ordenSuperior('Este mensaje va en un console.log!', escribirLog); */

/*
------------------------------------------------------------
3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
------------------------------------------------------------
*/

function efectuarOperacion(num1, num2, operacion){
    return operacion(num1, num2);
}

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

/* console.log( efectuarOperacion(5,3, suma) );
console.log( efectuarOperacion(5, 3, resta) );
console.log( efectuarOperacion(5, 3, multiplicacion) ); */

/*
------------------------------------------------------------
4.- Escribe una funcion de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayusculas o en minusculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO
------------------------------------------------------------
*/

function cambiarFormato(cadena, formato){
    return formato(cadena);
}

function mayus(cadena){
    return cadena.toUpperCase();
}

function minus(cadena){
    return cadena.toLowerCase();
}

/* console.log( cambiarFormato('PejeLagarto', mayus) );
console.log( cambiarFormato('PejeLagarto', minus) ); */

/*
------------------------------------------------------------
5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
    EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) 
    mediante un callback
------------------------------------------------------------
*/

const mayorQueDosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

function compararHoras(arreglo) {

    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] >= 120) {
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

const arregloFinal = mayorQueDosHoras([300, 120, 100, 50, 10, 150], compararHoras);
// console.log(arregloFinal);