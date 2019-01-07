# Peticiones #

***¿Qué es?***
Protocolo de transferencia de hipertexto (HTTP) es la vida de la web. Se utiliza cada vez que se transfiere un documento o se realiza una solicitud.
![alt-text](https://vignette.wikia.nocookie.net/central/images/b/b2/Cliente-servidor-http.png/revision/latest?cb=20170829163147)


***Conceptos***

**Arquitectura cliente servidor**
>Arquitectura Cliente servidor. Esta arquitectura consiste básicamente en un cliente que realiza peticiones a otro programa (el servidor) que le da respuesta

**Verbos HHTP**
>Los verbos HTTP le indican al servidor qué hacer con los datos identificados por la URL.Cada solicitud especifica un cierto verbo o método HTTP, en el encabezado de la solicitud. Esta es la primera palabra de todos las mayúsculas en el encabezado de la solicitud. Por ejemplo,

```
GET https://google.com
```

**Enpoint**
>Las URL son para identificar las cosas en las que desea operar. Decimos que cada URL identifica un recurso. Estas son exactamente las mismas URL que se asignan a las páginas web. De hecho, una página web es un tipo de recurso. Tomemos un ejemplo más exótico y consideremos nuestra aplicación de ejemplo, que gestiona la lista de clientes de una empresa:

```
/clients/Juan
```

**JSON**
>JSON (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript») es un formato de texto ligero para el intercambio de datos. JSON es un subconjunto de la notación literal de objetos de JavaScript aunque hoy, debido a su amplia adopción como alternativa a XML, se considera un formato de lenguaje independiente.

```json
{
    "id":1,
    "nombre":"Fido",
    "raza":"Pug",
    "color":"negro
}
```

**Status code**
>Los códigos de respuesta HTTP estandarizan una forma de informar al cliente sobre el resultado de su solicitud.
Estos son algunos códigos de respuesta HTTP, que a menudo se utilizan con REST:

**200 OK**
Este código de respuesta indica que la solicitud se ha realizado correctamente.

**201 Created**
Esto indica que la solicitud tuvo éxito y se creó un recurso. Se utiliza para confirmar el éxito de una solicitud PUT o POST.

**400 Bad Request**
La solicitud fue malformada. Esto sucede especialmente con las solicitudes POST y PUT, cuando los datos no pasan la validación o están en el formato incorrecto.

**404 Not Found**
Esta respuesta indica que no se pudo encontrar el recurso necesario. Esto generalmente se devuelve a todas las solicitudes que apuntan a una URL sin recurso correspondiente.

**401 Unauthorized**
Este error indica que debe realizar la autenticación antes de acceder al recurso.

**405 Method Not Allowed**
El método HTTP utilizado no es compatible con el de este recurso.

**409 Conflict**
Esto indica un conflicto. Por ejemplo, está utilizando una solicitud PUT para crear el mismo recurso dos veces.

**500 Internal Server Error**
Cuando todo lo demás falla; En general, se utiliza una respuesta 500 cuando el procesamiento falla debido a circunstancias imprevistas en el lado del servidor, lo que provoca el error del servidor.


***Quiero saber mas...***

(https://michelletorres.mx/peticiones-http-get-post-put-delete-etc/)

(https://code.tutsplus.com/es/tutorials/a-beginners-guide-to-http-and-rest--net-16340)

(https://developer.mozilla.org/es/docs/Web/HTTP/Methods)