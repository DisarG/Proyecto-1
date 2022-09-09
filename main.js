let img_habitaciones = document.getElementById('galeria');

habitaciones = new Array();

habitaciones[0] = [URL= 'https://tecnohotelnews.com/wp-content/uploads/2019/04/habitacion-gorka-room-mate.jpg' ,
'<h3 class="tituloHabitaciones">Habitación 1 </h3>',
'<p>Cantidad de camas: 1 cama doble </p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'
],
habitaciones[1] = [URL= 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/07/hotel-dazzler-montevideo.jpg' ,
'<h3 class="tituloHabitaciones">Habitación 2 </h3>', 
'<p>Cantidad de camas:  1 cama doble</p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[2] = [URL= 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg' , 
'<h3 class="tituloHabitaciones">Habitación 3 </h3>', 
'<p>Cantidad de camas:1 cama doble </p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[3] = [URL= 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg' ,
'<h3 class="tituloHabitaciones">Habitación 4 </h3>', 
'<p>Cantidad de camas:1 cama doble </p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[4] = [URL= 'https://www.palladiumhotelgroup.com/content/dam/palladium/content-fragments/hoteles/es/trs-ibiza-hotel/galeria/imagenes/habitaciones/deluxe-sea-view/definitivas/TRS-IBIZA-DELUXE-VISTA-MAR-1616_MG_5627.jpg.transform/rendition-md/image.jpg' , 
'<h3 class="tituloHabitaciones">Habitación 5 </h3>', 
'<p>Cantidad de camas: 1 cama doble</p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[5] = [URL= 'https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg' , 
'<h3 class="tituloHabitaciones">Habitación 6 </h3>', 
'<p>Cantidad de camas: 1 cama doble</p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[6] = [URL= 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/02/dazzler-montevideo-classic-1.jpg' , 
'<h3 class="tituloHabitaciones">Habitación 7 </h3>',
 '<p>Cantidad de camas: 2 camas simples </p>', 
 '<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[7] = [URL= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4ktlnTPIaAxkdpGqRLSB523l27ND0wZP5A&usqp=CAU' , 
'<h3 class="tituloHabitaciones">Habitación 8 </h3>', 
'<p>Cantidad de camas: 2 camas simples </p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'],
habitaciones[8] = [URL= 'https://cf.bstatic.com/images/hotel/840x460/373/373971471.jpg' , 
'<h3 class="tituloHabitaciones">Habitación 9 </h3>', 
'<p>Cantidad de camas: 1 cama Queen </p>', 
'<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>'];

/* habitaciones[9] = [URL= 'https://images.trvl-media.com/hotels/1000000/800000/795200/795177/c79aacd9.jpg?impolicy=resizecrop&rw=670&ra=fit' ,
 '<h3 class="tituloHabitaciones">Habitación 10 </h3>', 
 '<p>Cantidad de camas: 1 cama Queen </p>', 
 '<p>Baños: </p>',
'<p>Metros cuadrado:</p>',
'<p>Precio por noche:</p>']; */


if(img_habitaciones){
for (i=0;1<habitaciones.length;i++) {
    let creaDiv = document.createElement("div");
    let creaimg = document.createElement(`img`);

    creaDiv.setAttribute('class', 'contenedorDeFoto');
    creaDiv.innerHTML = habitaciones[i][1] + habitaciones[i][2] + habitaciones[i][3] + habitaciones[i][4] + habitaciones[i][5];
    creaimg.setAttribute('class', 'fotosDeHabitaciones');
    creaimg.setAttribute('src', habitaciones[i][0]);

    img_habitaciones.appendChild(creaDiv)
    creaDiv.appendChild(creaimg)


    /* 

     // Primera Prueba de agregado de imagenes y parrafos a div.

    const app = document.querySelector("#galeria"); 
    app.insertAdjacentElement("afterbegin", creaDiv);

    const apptwo = document.querySelector(".contenedorDeFoto");
    apptwo.insertAdjacentElement("beforeend", creaimg)
    
    const appthree = document.querySelector(".contenedorDeFoto");
    appthree.insertAdjacentElement("beforeend", parrafo);
     */
}
}
