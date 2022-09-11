function guardarLocal(){
    var textarea1 = document.getElementById("local").value;
    localStorage.setItem("text1", textarea1);
    document.getElementById("agradecimiento").innerHTML = localStorage.getItem("text1");
    //document.getElementById("textareaUno").reset();
}    
document.addEventListener("click", guardarLocal);
document.getElementById("agradecimiento").innerHTML = localStorage.getItem("text1");