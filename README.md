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
En los span que marcan el nombre de la mascota, así como las vidas se le agregó un id para poder trabajarlo en js; user-pet__name se trabajó primero en js. Se creó una nueva variable que modifica el span del html al hacer uso del método innerHTML, cada variable guarda el nombre de la mascota seleccionada que, al recibir el argumento click, modifica el span y coloca ese nombre; esto ocurre dentro de la sección move-selector en html.
*********************************************************
- Se usa la clase y la función floor dentro de éste objeto: Math.floor() para conseguir que la mascota rival sea elegida de forma aleatoria; Math.floor() nos sirve para quitar los decimales al argumento que se le dé; como argumento recibe la clase Math con la función random: Math.random para que nos traiga un número entre 0 y 1. El valor de Math.random se multiplicará por una pequeña operación: ((min + max) + min) Todo esto está dentro de la función aleatorio() como un return, esta función recibe dos parámetros, un numero minimo y un máximo para establecer un rango que, para éste caso es 1 - 3. 
La función aleatorio queda de la siguiente manera: aleatorio(min,max){
    return Math.floor(Math.random()*(min + max) + min)
}
- De esta manera siempre obtendrémos un número entre 1 - 3 de forma que la mascota rival será elegida de forma aleatoria.
*********************************************************
- Añadí el código Js para la elección de los ataques del usuario; primero manipulamos el DOM para darle interacción a los botones: fire-btn, water-btn y ground-btn. Cada boton se guarda en una variable y posteriormente manipulamos el DOM añadiendo un addEventListener a cada variable dónde registramos un click y, si esto es true, entonces ejecutamos la función que nos regresará el ataque que hemos elegido para cada boton. fireAttack(), waterAttack() y groundAttack().
- Para hacer estas funciones primero creamos una variable global: userAttack, que guardará el botón al que el usuario dió click y posteriormente nos regresa un alert mostrando el ataque: Fuego, Agua o Tierra.
*********************************************************
- En esta ocasión agregué el código js para la elección aleatoria de ataques del enemigo, de forma similar a la elección de personajes; se utilizó la función aleatorio() con rango entre 1 y 3, así como condicionales if, else if.
- El resultado aleatorio se guarda en la variable global enemyAttack; posteriormente se trabaja en el código para la batalla, en este caso se hace uso del método creatElement de Document.
- Se crea la funcion newMessages() y manipulamos el DOM; en la sección messages de html eliminamos el contenido de la etiqueta p y la misma; en javascript, creamos la variable messageSection para enlazarla con la sección messages. Después creamos una variable que guarde el párrafo nuevo, paragraph = document.createElement('p').
- Utilizando el método innerHtml de paragraph, desarrollamos el nuevo parrafo que nos indica el ataque elegido por el usuario y el enemigo, haciendo uso de las variables globales userAttack y enemyAttack que guardaron estos datos. Al concatenar estas variables globales se termina por ahora el párrafo. 
- Al final se agrega este nuevo párrafo utilizando el método appenChild a la variable messageSection y se manda a llamar esta función al final de cada función fireAttack, waterAttack y groundAttack.
*********************************************************
- Continuando con el cuadro de texto, agregué el código que nos dice el resultado del combate; la lógica está basada en condicionales if dónde ponemos 3 posibles resultados del combate: empate si el ataque elegido por el usuario es el mismo que el del rival, gana si el ataque del usuario y del rival es: fuego - tierra, tierra - agua y agua - fuego, y si no cumple ninguna de estas condiciones, entonces el rival gana. Esto ocurre en una nueva función llamada final.
- Este resultado se refleja en el html por manipulación del DOM desde la función newMessage donde, le concatenamos la nueva función al párrafo creado con document.creatElement y paragraph.innerHTML.
*********************************************************
- En esta parte del proyecto agregué el código que nos avisa que el juego ha terminado; se agrega una función llamada petStats() con condicionales if, else if, y else que valida si, las vidas del usuario cayeron a 0 o bien, si el enemigo ha llegado a las 0 vidas. Esta nueva función se llama dentro de la función del combate, llamada results() dónde valida en cada secuencia de ataque usuario vs ataque enemigo, las vidas.
- Se agregan variables globales userLife y enemyLife con valor de 3 para ambas, para tener una base sobre la cual tendrémos que restarle una unidad -- dentro de la función results en cada if, esto es, en el if dónde el ataque del usuario gana sobre el ataque enemigo, se resta una unidad a la vida del enemigo = enemyLife-- y se modifica el spanEnemyLife para que vaya decreciendo el numero 3 de las vidas.
- Posteriormente, se agrega una función con la lógica similar a la de newMessage(), dónde agrega un párrafo, dentro de la sección html de message, que nos indica si el usuario ha ganado = la vida del enemigo llegó a 0, o si el usuario ha perdido = las vidas del usuario llegaron a 0, dadas por la función petStats().
*********************************************************