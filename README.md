# practica-juego-html-css-js
Ejercicio de HTML, CSS Js del curso de Platzi, creación del juego "mokepon"

- Comenzamos la maquetación por definir las secciones que tendrá la hoja de HTML: Selección de personajes, selección de ataques y una sección dónde se mostrará un mensaje que nos diga el resultado de la batalla.
- Se añade una última sección dedicada a un botón, este será de reinicio, así cuando el juego termine el usuario puede volver a empezar.
*********************************************************
- Colocamos en el HTML, seccion pet-selector, los personajes(3). Los colocamos en parejas de etiquetas: input + label, de esta forma podemos seleccionar la mascota al hacer click en el nombre, sin necesidad de seleccionar el input de tipo radio. Esto haciendo que coincidan los valores de los atributos: id del input con el for del label.
*********************************************************
- Agregué javascript básico al proyecto; desde el HTML se agrega Js al final del body para evitar que cargue primero el archivo js y pueda originar algun problema de renderizado. En el archivo js, se agrega una función petSelector() que por el momento arroja un alert cada vez que se da click en el boton seleccionar con id="pet-selector-btn". 
Para que esta función se pueda utilizar se creó una variable que enlace con el boton seleccionar de id pet-selector-btn. Se accede despues al metodo addEventListener de esta variable con dos argumentos ='click', petSelector.
*********************************************************
- En la función petSelector modifique el código para validar la mascota seleccionada utilizando el método getDocumentById del input seleccionado si era .checked = true o false con el uso de condicionales if, else if y else.
*********************************************************
