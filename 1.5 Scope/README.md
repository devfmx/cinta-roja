# Scope #

***¿Qué es?***

Cuando hablamos del Scope de una variable, nos referimos al alcance que tiene respecto al sitio donde se esté haciendo uso de la misma. 

Veamos un ejemplo:

```
{
    const programa = "Cinta roja";
}

console.log(programa);
```

El resultado de la siguiente línea de código es:

```
undefined
```

Sucede esto ya que la constante programa está definida dentro de un bloque de código definido por las llaves. Un ejemplo muy parecido lo hemos encontrado en funciones.

```
function cinta() {
    const programa = "Cinta Roja";
    console.log(programa);
}

cinta();
console.log(programa);
```

El output de la siguiente instrucción es el siguiente:

```
"Cinta roja"
undefined
```

Una variable global es aquella que puede ser llamada en cualquier bloque de código.

```
const color = "Roja";

function cinta() {
    console.log(color);
    const programa = "Cinta " + color;
    console.log(programa);
}

cinta(color);
console.log(color);
```

El output es el siguiente:

```
"Roja"
"Cinta Roja"
"Roja"
```

Nos podemos dar cuenta que la constante fue accesible dentro y fuera de la función o bloque de código.

Veamos un ejemplo de dos variables con el mismo nombre.

```
const color = "Roja";

function cinta() {
    const color = "Blanca";
    console.log(color);
    const programa = "Cinta " + color;
    console.log(programa);
}

cinta(color);
console.log(color)
```

Output
```
"Blanca"
"Cinta Blanca"
"Roja"
```

Se definió nuevamente la constante color dentro de la función, sin embargo al llamar a la constante fuera de la función o bloque de código mantiene su valor global y dentro de la función poseé otro valor, quizá pueda ser un poco confuso el uso de variables globales y locales con un mismo nombre.

El uso de variables globales se considera una mala práctica de desarrollo, además de que esto puede hacer nuestro código un poco confuso, también es posible que pueda generar efectos secundarios dentro de nuestras funciones.

Entendamos este concepto con una metáfora, imagina que cada función es una persona, ¿te gustaría compartir tu cepillo de dientes con distintas personas? lo correcto es que cada persona tenga su cepillo de dientes con sus propias características.

Recuerda cepillarte los dientes tres veces al día.

***Quiero saber más...***

(https://www.w3schools.com/js/js_scope.asp)
(https://developer.mozilla.org/cs/docs/Web/JavaScript/Reference/Functions)