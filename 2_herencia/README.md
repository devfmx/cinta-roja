# Herencia #

***¿Qué es?***

La idea detrás de la herencia es que un objeto "es una" versión especializada de otro objeto. Existe una clase padre (también conocida como superclase) que define las propiedades básicas de nuestro objeto. Y hay una clase hija (subclase) que hereda las propiedades de la clase padre.
**La herencia nos permite reutilizar código definiendo un objeto en términos de otro objeto**


```javascript
class Shape {
    constructor(x, y) {
        this.xPosition = x;
        this.yPosition = y;
    }
 
getArea() {...}
 
}
 
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius
    }
 
    getArea() {...}
 
}
 
let circle = new Circle(1,2,3);
```

[Prueba aqui](https://repl.it/@EduDevf/herencia)

***Conceptos***

**Clase padre o super clase:** El concepto de herencia conduce a una estructura jerárquica de clases o estructura de árbol, lo cual significa que en la Programación Orientada a Objetos todas las relaciones entre clases deben ajustarse a dicha estructura. 

En esta estructura jerárquica, cada clase tiene sólo una clase padre. La clase padre de cualquier clase es conocida como su *superclase*. 

**Clase hija o subclase:** En esta estructura jerárquica, la clase hija de una superclase es llamada una *subclase*. 


**Método super():** La palabra clave super es usada para acceder y llamar funciones de el padre de un objeto.

**Sustitución Liskov** El principio de sustitución de Liskov nos dice que si en alguna parte de nuestro código estamos usando una clase, y esta clase es extendida, debe ser posible utilizar cualquiera de las clases hijas y que el programa siga siendo válido. Esto nos obliga a asegurarnos de que cuando extendemos una clase no estamos alterando el comportamiento del padre.

***Diapositivas***

[**Descargar diapositivas**](https://raw.githubusercontent.com/devfmx/cinta-roja/master/2_herencia/Herencia.pdf)

***Quiero saber mas...***

(https://code.tutsplus.com/es/tutorials/inheritance-and-extending-objects-with-javascript--cms-29836)

(https://es.wikipedia.org/wiki/Herencia_(inform%C3%A1tica))

(https://desarrolloweb.com/articulos/herencia-clases-javascript-ecmascript.html)

(https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super)
