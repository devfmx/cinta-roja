/*

                            Objetos Literales

-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/

let myPenguin = {
    character: "Tootsie the Penguin",
    origin: "Donald Duck",
    notes: "A baby penguin in the classic 1939 cartoon \"Donald's Penguin\"."
};

/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/

console.log("¡Hola, soy un pingüino y mi nombre es " + myPenguin.character + "!");

/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/

myPenguin.puedeVolar = false;

/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------
*/

myPenguin.graznar = function () {
    console.log("kaww kaww!");
};

//myPenguin.graznar();

/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/


myPenguin.saludar = function () {
    console.log("¡Hola, soy un pingüino y mi nombre es " + this.character + "!");
};

/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/

myPenguin.character = "Penguin McPenguinFace";
myPenguin.saludar();

/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("
-----------------------------------------------------------------------
*/

myPenguin.volar = function () {
    if (this.puedeVolar) {
        console.log("¡Puedo volar!");
    } else {
        console.log("No puedo volar :(");
    }
};

/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
-----------------------------------------------------------------------
*/

myPenguin.puedeVolar = true;
myPenguin.volar();

/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
-------------------------------------------------------------
*/

let receta = {
    'titulo': 'Mole',
    'porciones': 2,
    'ingredientes': ['canela', 'comino', 'cocoa']
};
/* 
console.log(receta.titulo);
console.log('Porciones: ' + receta.porciones);
console.log('Ingredientes:');
for (var i = 0; i < receta.ingredientes.length; i++) {
    console.log(receta.ingredientes[i]);
}
 */

/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/

let libros = [
        {
            titulo: 'Cien Años de Soledad',
            autor: 'Gabriel García Márquez',
            leido: true
        },
        {
            titulo: 'Do Androids Dream of Electric Sheep',
            autor: 'Phillip K. Dick',
            leido: false
        }
];

/* for (let i = 0; i < libros.length; i++) 
{
    let libro = libros[i];
    let libroInfo = libro.titulo + '" por ' + libro.autor;
    if (libro.leido) {
        console.log('Ya has leído "' + libroInfo);
    } else {
        console.log('Aún necesitas leer  "' + libroInfo);
    }
} */

/*

                            Objetos

-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo
-----------------------------------------------------------------------
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.estatura * this.estatura);
    }

    esMayorDeEdad() {
        if (this.edad > 17) {
            return "Es mayor de edad";
        } else return "No es mayor de edad";
    }

    obtenerRFC() {
        this.rfc = (this.nombre + this.edad + this.sexo);
    }
}

let mauricio = new Persona("Mauricio", 30, "H", 73.5, 1.75);

console.log(mauricio.esMayorDeEdad());
/* El atributo "rfc" se genera hasta que se ejecuta por primera vez el
   método "obtenerRFC()". Podemos observar que, si intentamos mostrar
   en consola el atributo "rfc", aparecerá un UNDEFINED en consola.
*/
console.log(mauricio.rfc);
console.log(mauricio.obtenerRFC());

/* Ahora sí, tras ejecutar el método "obtenerRFC()", podemos mostrar
   en consola el atributo. Es decir, el atributo ahora existe.
*/
console.log(mauricio.rfc);

/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900; operacion cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "No tienes fondos suficientes; el minimo es de $10";
        } else {
            this.cantidad -= cantidad;
            return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
        }

    }
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);
console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));

