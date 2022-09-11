let img_habitaciones = document.getElementById('galeria');

habitaciones = new Array();

habitaciones[0] = [URL = 'https://tecnohotelnews.com/wp-content/uploads/2019/04/habitacion-gorka-room-mate.jpg',
    '<h3 class="tituloHabitaciones">Habitación 1 </h3>',
    '<p class="text-parrafos">Cantidad de camas: cama king </p>',
    '<p class="text-parrafos">Baños: 2 baños</p>',
    '<p class="text-parrafos">M2: 25m2</p>',
    '<p class="text-parrafos">Precio por noche: $3000</p>'
],
    habitaciones[1] = [URL = 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/07/hotel-dazzler-montevideo.jpg',
        '<h3 class="tituloHabitaciones">Habitación 2 </h3>',
        '<p class="text-parrafos">Cantidad de camas:  2 camas simples</p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 15m2 </p>',
        '<p class="text-parrafos">Precio por noche: $1500</p>'],
    habitaciones[2] = [URL = 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
        '<h3 class="tituloHabitaciones">Habitación 3 </h3>',
        '<p class="text-parrafos">Cantidad de camas:1 cama doble </p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 20m2</p>',
        '<p class="text-parrafos">Precio por noche: $2000</p>'],
    habitaciones[3] = [URL = 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg',
        '<h3 class="tituloHabitaciones">Habitación 4 </h3>',
        '<p class="text-parrafos">Cantidad de camas:1 cama doble </p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 20m2</p>',
        '<p class="text-parrafos">Precio por noche: $2000</p>'],
    habitaciones[4] = [URL = 'https://www.palladiumhotelgroup.com/content/dam/palladium/content-fragments/hoteles/es/trs-ibiza-hotel/galeria/imagenes/habitaciones/deluxe-sea-view/definitivas/TRS-IBIZA-DELUXE-VISTA-MAR-1616_MG_5627.jpg.transform/rendition-md/image.jpg',
        '<h3 class="tituloHabitaciones">Habitación 5 </h3>',
        '<p class="text-parrafos">Cantidad de camas: 1 cama doble</p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 20m2</p>',
        '<p class="text-parrafos">Precio por noche: $2000</p>'],
    habitaciones[5] = [URL = 'https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg',
        '<h3 class="tituloHabitaciones">Habitación 6 </h3>',
        '<p class="text-parrafos">Cantidad de camas: cama king</p>',
        '<p class="text-parrafos">Baños: 2 baños</p>',
        '<p class="text-parrafos">M2: 25m2</p>',
        '<p class="text-parrafos">Precio por noche: $3000</p>'],
    habitaciones[6] = [URL = 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/02/dazzler-montevideo-classic-1.jpg',
        '<h3 class="tituloHabitaciones">Habitación 7 </h3>',
        '<p class="text-parrafos">Cantidad de camas: 2 camas simples </p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 15m2</p>',
        '<p class="text-parrafos">Precio por noche: $1500</p>'],
    habitaciones[7] = [URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4ktlnTPIaAxkdpGqRLSB523l27ND0wZP5A&usqp=CAU',
        '<h3 class="tituloHabitaciones">Habitación 8 </h3>',
        '<p class="text-parrafos">Cantidad de camas: 2 camas simples </p>',
        '<p class="text-parrafos">Baños: 1 baño</p>',
        '<p class="text-parrafos">M2: 15m2</p>',
        '<p class="text-parrafos">Precio por noche: $1500</p>'],
    habitaciones[8] = [URL = 'https://cf.bstatic.com/images/hotel/840x460/373/373971471.jpg',
        '<h3 class="tituloHabitaciones">Habitación 9 </h3>',
        '<p class="text-parrafos">Cantidad de camas: cama king </p>',
        '<p class="text-parrafos">Baños: 2 baños</p>',
        '<p class="text-parrafos">M2: 25m2</p>',
        '<p class="text-parrafos">Precio por noche: $3000</p>'];

if (img_habitaciones) {
    for (i = 0; 1 < habitaciones.length; i++) {
        let creaDiv = document.createElement("div");
        let creaimg = document.createElement(`img`);

        creaDiv.setAttribute('class', 'contenedorDeFoto');
        creaDiv.innerHTML = habitaciones[i][1] + habitaciones[i][2] + habitaciones[i][3] + habitaciones[i][4] + habitaciones[i][5];
        creaimg.setAttribute('class', 'fotosDeHabitaciones');
        creaimg.setAttribute('src', habitaciones[i][0]);

        img_habitaciones.appendChild(creaDiv)
        creaDiv.appendChild(creaimg)

    }
}
