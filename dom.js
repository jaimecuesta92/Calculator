console.log(document.title);
document.title="jaime es una chimba";
console.log(document.body);
var h1=document.getElementsByTagName("h1");

h1[0].innerHTML="prueba";
console.log(h1);

var boton=document.getElementById("boton");
console.log(boton);
 
boton.addEventListener("click", mensaje);
function mensaje(){
    alert("su respuesta ha sido guardada");
}