/* PRIMER PROBLEMA*/

var numeronormal
var numerosuertudo
function valornumero1(){
    let numero=document.getElementById("valor").value;
    if((numero<=15) || (numero=55) || (numero=75)){
        numerosuertudo=true
        alert (parseFloat("numero suertudo"))
    }
    else{
        numeronormal=false
        alert (parseFloat("numero normales"))
    }
  
}

/*SEGUNDO PROBLEMA*/
var anoahorasiquesi= document.getElementById("ano")
function valornumero(){
    if  ((anoahorasiquesi.value % 4 == 0 && anoahorasiquesi.value %100 != 0 ) || (anoahorasiquesi.value % 400 == 0)){
alert ("El año" + anoahorasiquesi.value + "es bisiesto")
    }
    else{
alert ("El año" + anoahorasiquesi.value + "no es bisiesto")
    }
}

