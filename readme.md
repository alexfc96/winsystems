Stack:
    -Nodejs version: >=18
    -Ionic version: 8

Proccess to run the application:
    -Clone the repository
    -Run npm run install
    -Configure enviromment files(src/environment.prod.ts and environment.ts) with the variables and their respective values for able to call the API correctly:
        ·MARVEL_PUBLIC_KEY
        ·MARVEL_PRIVATE_KEY
    -Execute npm run start

Explanatation of exercise request:
    Realizar una app:
     En Ionic que utilice
    o Preferentemente versión 5 con Capacitor
    o Angular
    o Typescript
    o SCSS
     Que consuma la Api de superhéroes de Marvel y tenga 2 pantallas.
     Una que liste los superhéroes de la API
     Otra que muestre el detalle de un superhéroe seleccionado desde la lista anterior.

    Pantalla de Listado:
     Para la pantalla de listado se deben mostrar los siguientes datos:
    o Name
    o Thumbnail
     La api de Marvel se encuentra en este sitio:
    o https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
    o (Es de tipo free, solo hace falta registrarse para poder consumirla)
    o Trabajar únicamente con los primeros 20 elementos que retorna la Api.
     No aplicar paginado

    Pantalla de Detalle:
     Para la pantalla de detalle se deben mostrar los siguientes datos:
    o Nombre
    o Imagen en miniatura
    o Cantidad de Comics disponibles
    o Cantidad de Series disponibles
    o Cantidad de Stories disponibles
     Los datos deben ser enviados desde la pantalla de Listado
     Esta pantalla debe permitir retornar a la anterior con un back button en la toolbar

    Otras consideraciones:
     Se valorará la arquitectura usada
     Se valorará la forma de implementar los stylos para la pantallas a través de scss
     No es importante el diseño, no se espera que el desarrollador tenga conocimientos de Visual
    Designer e implemente un diseño espectacular.
     La app debe funcionar tanto en Ingles como en Español de acuerdo al idioma del device

    Extras (solo realizar si se tienen estos conocimientos):
     Utilizar un plugin de llamadas Rest de Capacitor o Cordova