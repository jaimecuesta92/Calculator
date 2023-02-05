const botonumeros= document.getElementsByName("data-number");
const botonopera= document.getElementsByName("data-opera");
const botonigual= document.getElementsByName("data-igual")[0];
const botondelete= document.getElementsByName("data-delete")[0];
var result= document.getElementById("result");
var opeactual= "";
var opeanterior= "";
var operacion= undefined;

botonumeros.forEach(function(boton){
    boton.addEventListener("click",function(){
        agregarNumero(boton.innerText);
    })   
});
botonopera.forEach(function(boton){
    boton.addEventListener("click",function(){
        selectOpeacion(boton.innerText);
    })   
});
botonigual.addEventListener("click",function(){
    calcular();
    actualizarDisplay();
});
botondelete.addEventListener("click",function(){
    clear();
    actualizarDisplay();
});

function selectOpeacion(op){
    if(opeactual==="") return;
    if(opeanterior!== ""){
        calcular()
    }
    operacion=op.toString();
    opeanterior = opeactual;
    opeactual = "";
}

function calcular(){
    var calculo;
    const anterior= parseFloat(opeanterior);
    const actual= parseFloat(opeactual);
    if(isNaN(anterior)|| isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior+actual;
            break; 
        case "-": 
        calculo = anterior-actual;
            break; 
        case "*":
        calculo = anterior*actual;
            break;
        case "/":
            calculo = anterior/actual;
            break;
        default:
            return;    
    }
opeactual = calculo;
operacion = undefined;
opeanterior = "";
}



function agregarNumero(num){
    opeactual=opeactual.toString()+num.toString();
    actualizarDisplay();
}

function clear(){
    opeactual="";
    opeanterior="";
    operacion=undefined;
}
function actualizarDisplay(){
    result.value=opeactual;
}

clear();