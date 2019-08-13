# Objetos #

***¿Qué es?***

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor. Un valor de propiedad puede ser una función, la cual es conocida entonces como un método del objeto.
**En JavaScript, casi todo es un objeto.**


Objetos Literales:
Podemos crear un objeto en Javascript asignando un valor literal de objeto en una variable. Eso se consigue colocando dicho literal entre llaves y dentro de ellas tantas propiedades o métodos con pares "clave/valor", por medio de una sintaxis como esta:

```javascript
var dimensiones = {
    altura: 34,
    anchura: 455
}
```


Objetos:

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos.
Una manera de definir una clase es mediante una declaración de clase. Para la declaración de una clase, es necesario el uso de la palabra reservada class y un nombre para la clase .
El cuerpo de una clase es la parte que se encuentra entre las llaves {}. Este es el lugar donde se definen los miembros de clase, como los métodos o constructores.

```javascript
class Poligono {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  getArea(){
      return this.alto * this.ancho
  }
};
```
[Replit Code view](https://repl.it/@EduDevf/clase1objetos "replit") 

***Conceptos***

**Contructor:** El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método constructor, se arrojará un Error SyntaxError

**Propiedades:** Las propiedades son variables contenidas en la clase, cada instancia del objeto tiene dichas propiedades. Las propiedades deben establecerse a la propiedad prototipo de la clase (función), para que la herencia funcione correctamente.

**this:** Para trabajar con propiedades dentro de la clase se utiliza la palabra reservada this , que se refiere al objeto actual. El acceso (lectura o escritura) a una propiedad desde fuera de la clase se hace con la sintaxis: `NombreDeLaInstancia.Propiedad`. Desde dentro de la clase la sintaxis es `this.Propiedad` que se utiliza para obtener o establecer el valor de la propiedad).

**Métodos:** Algoritmo asociado a un objeto (o a una clase de objetos), cuya ejecución se desencadena tras la recepción de un "mensaje". Desde el punto de vista del comportamiento, es lo que el objeto puede hacer. 

**Instancia:** En los lenguajes de programación orientada a objetos un objeto es una instancia de una clase. Esto es, un miembro de una clase que tiene atributos en lugar de variables. En un contexto del mundo real, podríamos pensar en "Casa" como una clase y en un chalet como una instancia de esta e incluso otro chalet u otro tipo de casa como puede ser un apartamento como otra instancia

***Diapositivas***

[**Descargar diapositivas**](https://raw.githubusercontent.com/devfmx/cinta-roja/master/1.2%20%Objetos/Objetos.pdf)


***Quiero saber más...***

(https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos)
(https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes)
(https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)
(http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/)
