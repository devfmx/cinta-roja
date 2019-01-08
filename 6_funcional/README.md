# Funcional #

***¿Qué es?***
La programación funcional ha estado creando gran revuelo en el mundo del desarrollo estos días. Y por una buena razón: las técnicas funcionales pueden ayudarte a escribir código más declarativo que es fácil de entender en una ojeada, refactorizar y testear. 

Uno de los pilares de la programación funcional es su especial uso de listas y operaciones de listas. Y esas cosas son exactamente lo que suenan: arrays de cosas y lo que haces con ellas. 

***Conceptos***

**map**
>Cuando llamas un map en un array, este ejecuta el callback en cada elemento dentro de él, retornando un nuevo array con los valores que el callback retorna.

Bajo el capó, map pasa tres argumentos a tu callback:
- El item actual en el array
- El indice en el array del elemento actual
- El array entero al que estas mapeando.
```javascrip
[1, 2, 3, 4, 5, 6].map(x => x * 2); // [2, 4, 6, 8, 10, 12]
```

**filter**
```
[1, 2, 3, 4, 5, 6].filter(x => x % 2 === 0); // [2, 4, 6]

```
***Quiero saber mas...***

(https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript)

(https://elabismodenull.wordpress.com/2016/11/10/programacion-funcional-en-javascript-los-metodos-funcionales/)