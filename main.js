let img_habitaciones = document.getElementById('galeria');

habitaciones = new Array();

habitaciones[0] = [URL= 'https://tecnohotelnews.com/wp-content/uploads/2019/04/habitacion-gorka-room-mate.jpg' , ''],
habitaciones[1] = [URL= 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/07/hotel-dazzler-montevideo.jpg' , ''],
habitaciones[2] = [URL= 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg' , ''],
habitaciones[3] = [URL= 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg' , ''],
habitaciones[4] = [URL= 'https://www.palladiumhotelgroup.com/content/dam/palladium/content-fragments/hoteles/es/trs-ibiza-hotel/galeria/imagenes/habitaciones/deluxe-sea-view/definitivas/TRS-IBIZA-DELUXE-VISTA-MAR-1616_MG_5627.jpg.transform/rendition-md/image.jpg' , ''],
habitaciones[5] = [URL= 'https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg' , ''],
habitaciones[6] = [URL= 'https://dazzlermontevideo.com/wp-content/uploads/sites/8/2020/02/dazzler-montevideo-classic-1.jpg' , ''],
habitaciones[7] = [URL= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4ktlnTPIaAxkdpGqRLSB523l27ND0wZP5A&usqp=CAU' , ''],
habitaciones[8] = [URL= 'https://cf.bstatic.com/images/hotel/840x460/373/373971471.jpg' , ''],
habitaciones[9] = [URL= 'https://images.trvl-media.com/hotels/1000000/800000/795200/795177/c79aacd9.jpg?impolicy=resizecrop&rw=670&ra=fit' , ''];


if(img_habitaciones){
for (i=0;1<habitaciones.length;i++) {
    let creaDiv = document.createElement(`div`);
    let creaimg = document.createElement(`img`);




    creaDiv.setAttribute('class', 'contenedorDeFoto');
    creaDiv.innerHTML = habitaciones[i][1];
    creaimg.setAttribute('class', 'fotosDeHabitaciones');
    
    creaimg.setAttribute('src', habitaciones[i][0]);
    img_habitaciones.appendChild(creaDiv);
    img_habitaciones.appendChild(creaimg);


}
}
