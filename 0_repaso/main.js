//VARIABLES
var saludo;
let loQueSea;
//Asignacion de una varibale
saludo = "Hola" //Strings
loQueSea = false //bool
const numero = 10 //number

//console.log(typeof saludo)

//Estructuras de control
//console.log(1 === "1")
//console.log(100 <= 10);

// if (numero >= 10){
//     console.log('SI');
// }else{
//     console.log('NO');
// }

// const edad = 18;
// if(edad >= 18){
//     console.log('Eres legal')
// }else{
//     console.log('No eres legal :(')
// }

// const semaforo = 'AMARILLO';
// if(semaforo === 'VERDE'){
//     console.log('Avnzar');
// }else if(semaforo === 'AMARILLO'){
//     console.log('ACELERAR');
// }else{
//     console.log('Detener');
// }

//Operadores lógicos
//console.log(1 === 1 && 2 === 2 && 3 === 3)
//console.log(0 === 1 || 33 === 2 || 23 === 3)

// const edad = 11;
// const ine = true;

// if(edad >= 18 && ine){
//     console.log('Puede comprar chelas');
// }else{
//     console.log('No puede comprar chelas :(');
// }


// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// const lista = []
// let lista2 = [1,3,"asd","kj","kpr",false,true]
// console.log(lista);
// //console.log(lista2);
// lista.push('hola');
// lista.push('que onda');
// lista.push('holi');
// lista.push('saludos');
// console.log(lista);

// for(let i = 0; i<lista.length; i++){
//     console.log(lista[i])
// }

//Funciones
function printName(name){
    console.log(`El nombre que me pasaron es: ${name}`);
}

var myFunction = function (){
    return 'Funcion anonima'
}

let retorno = printName('Juanito');
console.log(retorno)