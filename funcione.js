/*
var sumar= function (a,b,c=3){
    return a+b+c;
}
var result1=sumar(3,4)
var result2=sumar(8,20,30);
var result= sumar(25,32,11);
console.log(result);
console.log(result1);
console.log(result2);*/


//Funciones recursivas//

/*var factorial=function(n){
    if((n==0) || (n==1))
        return 1;
    else
        return(n*factorial(n-1));
}
console.log(factorial(6));*/

var nombres=["grover","carlos","ana","luisa"];
var vegetales= new Array("tomate","lechuga","zanahoria");

/*console.log(nombres[3]);
console.log(vegetales[1]);

nombres[0]="jose";
vegetales[2]="cebolla"

console.log(nombres[0]);
console.log(vegetales[2]);*/

/*console.log(nombres.length);
for(var i=0; i<= nombres.length-1; i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento,indice){
    console.log(elemento, indice)
})*/

nombres.push("camilo");
console.log(nombres);
nombres.unshift("brenda", "amanda","roberto");
console.log(nombres);

 var pos=nombres.indexOf("ana");
 console.log(pos);
 