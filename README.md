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
Además se agrega el método addEventListener con el argumento de load y start game al elemento window, de tal manera que primero se requiera renderizar la página antes de cargar el código js.
*********************************************************
- Actualice la función petSelector; la selección de cada mascota es a partir de variables nuevas, estas guardan el document.getElementById de cada uno, simplificando el código y permitiendo su reutilización.
En los span que marcan el nombre de la mascota, así como las vidas se le agregó un id para poder trabajarlo en js; user-pet__name se trabajó primero en js. Se creó una nueva variable que modifica el span del html al hacer uso del método innerHTML, cada variable guarda el nombre de la mascota seleccionada que, al recibir el argumento click, modifica el span y coloca ese nombre; esto ocurre dentro de la sección messages en html.
*********************************************************
