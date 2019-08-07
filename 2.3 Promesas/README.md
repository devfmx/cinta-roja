# Promesas #

***¿Qué es?***
Esta es una de las nuevas técnicas que la comunidad está adoptando para solucionar el problema de asincronía que presenta JavaScript, dicha técnica consiste en la creación de un objeto Promise que recibe 2 parámetros los cuales son.

resolve : Este contendrá el resultado de la función que se está ejecutando dentro de la promesa.

reject : Contendrá una respuesta de error siempre y cuando no se pueda resolver la promesa.

Se utiliza para computaciones asíncronas. Su principal propósito es evitar el llamado “callback hell“, código complejo y difícil de mantener. Además, se ahorran líneas de código e indentación.
Imaginemos que cumplimos años en 1 mes y nuestra madre nos dice que nos va a regalar nuestro videojuego favorito. Eso, precisamente, es nuestra promesa.

Cuando llegue nuestro cumpleaños, se ejecutará dicha promesa, sin embargo, no quiere decir que se cumplirá correctamente. En nuestro ejemplo, pueden pasar dos cosas:

Nos regala el juego que queríamos.
No tenemos el regalo que deseábamos y obtenemos una razón.

```javascript
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);
 
    setTimeout(
  () => number > 5
    ? resolve(number)
    : reject(new Error('Menor a 5')),
    1000
  );
});
 
promise
  .then(number => console.log(number))
  .catch(error => console.error(error));
```
[Prueba aquí](https://repl.it/@EduDevf/5promesas "replit")

***Diapositivas***

[**Descargar diapositivas**](https://raw.githubusercontent.com/devfmx/cinta-roja/master/2.3%20%Promesas/Promesas.pdf)


***Conceptos***

**Callback hell**
>El callback Hell se produce cuando encadenamos muchas operaciones asíncronas seguidas.
>![alt-text](https://cdn-images-1.medium.com/max/2000/1*nREYTp-1WUnDmz3YXabNsg.png)

***Quiero saber más...***

(https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2)
