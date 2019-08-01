#Javascript asincrono y callbacks#

***¿Qué es?***
![alt text](https://camo.githubusercontent.com/c52b058fddead54a1557e71a1a97852b3bdd1c76/68747470733a2f2f7363722e7361642e737570696e666f2e636f6d2f61727469636c65732f7265736f75726365732f3136343836322f323230342f312e706e67)
La programación asíncrona nos da la capacidad de “diferir” la ejecución de una función a la espera de que se complete una operación, normalmente de I/O (red, disco duro, …), y así evitar bloquear la ejecución hasta que se haya completado la tarea en cuestión. Esto es posible gracias a que las funciones son ciudadanos de primer nivel (first-class citizens) y pueden ser pasadas como argumentos de otras funciones tal cual lo haríamos con las variables.

***Conceptos***

**Sincronicidad:** Podemos simplificar la definición de código *síncrono* como "un conjunto de sentencias en secuencia"; así cada sentencia en tu código es ejecutada una tras la otra. Esto significa que cada sentencia debe esperar a que la sentencia previa termine de ejecutarse. 

**Asincronicidad:** El código asíncrono toma sentencias fuera del flujo principal del programa, permitiendo que el código que se encuentre después de la llamada asíncrona se ejecute inmediatamente sin esperar.

**Callback:** Un callback no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción. En nuestro contexto asíncrono, un callback representa el *¿Qué quieres hacer una vez que tu operación asíncrona termine?*.  

**Higher Order Function:** Una función de orden superior (higher order function) es una función que recibe como argumento un *callback*

```javascript
function foo(callback) { 
   //do something
   callback();
}
```
[Prueba aquí](https://repl.it/@EduDevf/3async "replit")

**Pila de llamadas:** La pila de llamadas o *Call Stack* es una estructura de datos que registra básicamente en qué parte del programa estamos. Si entramos en una función, la colocamos en la parte superior de la pila. Si regresamos de una función, salimos de la parte superior de la pila. Eso es todo lo que la pila puede hacer.

**Cola de ejecución:** Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación (como es el caso de operaciones asíncronas), el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente. Recordemos que un callback era la *función que se ejecutará como respuesta*.

**Eventloop:** Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se procesan los mensajes de la cola. Con cada *tick* del bucle de eventos, se procesa un nuevo mensaje. Este procesamiento consiste en llamar al callback asociado a cada mensaje lo que dará lugar a un nuevo frame en la pila de llamadas. Este frame inicial puede derivar en muchos más, todo depende del contenido del callback. Un mensaje se termina de procesar cuando la pila vuelve a estar vacía de nuevo. A este comportamiento se le conoce como *run-to-completion*.

***Diapositivas***

[**Descargar diapositivas**](https://raw.githubusercontent.com/devfmx/cinta-roja/master/3_async/JS_ASYNC.pdf)

***Quiero saber más...***
(https://www.todojs.com/controlar-la-ejecucion-asincrona/)
(https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono)
(https://medium.com/laboratoria-how-to/programacion-asincrona-cea3bad7c3c6)
