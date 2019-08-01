# React #

***¿Qué es?***
React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.

React está construido en torno a hacer funciones, que toman las actualizaciones de estado de la página y que se traduzcan en una representación virtual de la página resultante. Siempre que React es informado de un cambio de estado, vuelve a ejecutar esas funciones para determinar una nueva representación virtual de la página, a continuación, se traduce automáticamente ese resultado en los cambios del DOM necesarios para reflejar la nueva presentación de la página.

React utiliza el llamado HTML virtual DOM, el cual se renderiza mucho más rápido que el HTML tradicional ya que no se calculan sus estilos CSS. Cuando el virtual DOM cambia se genera uno nuevo y se calcula las diferencias con el anterior virtual DOM. Por último React genera los cambios pertinentes en el HTML.


[Prueba aquí](https://repl.it/@EduDevf/firstreactApp "replit")


***Conceptos***

**DOM**
>El DOM es un API de programación para documentos. Guarda una gran similitud con la estructura del documento al que modeliza. Por ejemplo, considérese esta tabla, tomada de un documento HTML:

```html
      <TABLE>
      <TBODY> 
      <TR> 
      <TD>Shady Grove</TD>
      <TD>Aeolian</TD> 
      </TR> 
      <TR>
      <TD>Over the River, Charlie</TD>        
      <TD>Dorian</TD> 
      </TR> 
      </TBODY>
      </TABLE>
    
```
![alt-text](https://www.w3.org/2002/07/table.png)

**Componentes**
>Un componente en React es un pedazo de nuestra vista por ejemplo la navbar esta se encapsula en un componente y esto te da la capacidad de poder reutilizarlo las veces que sea necesario sin tener que volver a escribir código.


***Diapositivas***

[**Descargar diapositivas**](https://raw.githubusercontent.com/devfmx/cinta-roja/master/9_my-first-react-app/React.pdf)


***Quiero saber mas...***

(https://desarrolloweb.com/articulos/que-es-react-motivos-uso.html)
(https://devcode.la/blog/como-funciona-reactjs/)
(https://platzi.com/blog/react-js-de-javascript/)
(https://frostqui.github.io/react-componentes)
(https://medium.com/@shmesa23/ciclos-de-vida-de-los-componentes-de-react-e1bf48a5ff73)