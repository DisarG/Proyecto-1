function Camas() {
  document.getElementById("myDropdown").classList.toggle("show");

}



function Baños() {
  document.getElementById("baños").classList.toggle("show");

}


function m2() {
  document.getElementById("m2").classList.toggle("show");

}


function Precio() {
  document.getElementById("Precio").classList.toggle("show");

}

/* Filtrado Cantidad de Camas! */


filterSelectionAll("all")
function filterSelectionAll(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[0].style.display = "block", x[1].style.display = "block", x[2].style.display = "block",
        x[3].style.display = "block", x[4].style.display = "block", x[5].style.display = "block",
        x[6].style.display = "block", x[7].style.display = "block", x[8].style.display = "block");
    }
  }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[0].style.display = "block", x[5].style.display = "block", x[8].style.display = "block"
        , x[1].style.display = "none", x[2].style.display = "none", x[3].style.display = "none"
        , x[4].style.display = "none", x[6].style.display = "none", x[7].style.display = "none");
    }
  }
}

filterSelection2("all")
function filterSelection2(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[2].style.display = "block", x[3].style.display = "block", x[4].style.display = "block"
        , x[0].style.display = "none", x[5].style.display = "none", x[6].style.display = "none"
        , x[7].style.display = "none", x[8].style.display = "none", x[1].style.display = "none");
    }
  }
}

filterSelection3("all")
function filterSelection3(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[1].style.display = "block", x[6].style.display = "block", x[7].style.display = "block"
        , x[0].style.display = "none", x[2].style.display = "none", x[3].style.display = "none"
        , x[4].style.display = "none", x[5].style.display = "none", x[8].style.display = "none");
    }
  }
}

/* Finaliza filtrado cantidad de camas */

/* Filtrado por baños */

filterSelectionAll("all")
function filterSelectionAll(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[0].style.display = "block", x[1].style.display = "block", x[2].style.display = "block",
        x[3].style.display = "block", x[4].style.display = "block", x[5].style.display = "block",
        x[6].style.display = "block", x[7].style.display = "block", x[8].style.display = "block");
    }
  }
}

filterSelectionBaño("all")
function filterSelectionBaño(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[0].style.display = "none", x[5].style.display = "none", x[8].style.display = "none"
      , x[1].style.display = "block", x[2].style.display = "block", x[3].style.display = "block"
      , x[4].style.display = "block", x[6].style.display = "block", x[7].style.display = "block");
    }
  }
}

filterSelectionBaños("all")
function filterSelectionBaños(c) {
  var x, i;
  x = document.getElementsByClassName("contenedorDeFoto");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
    } else {
      w3RemoveClass(x[0].style.display = "block", x[5].style.display = "block", x[8].style.display = "block"
        , x[1].style.display = "none", x[2].style.display = "none", x[3].style.display = "none"
        , x[4].style.display = "none", x[6].style.display = "none", x[7].style.display = "none");
    }
  }
}

/* Finaliza filtrado de baños */





/* Funcion para remover elementos y lograr el filtrado */

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


