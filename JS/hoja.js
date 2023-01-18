/* PRIMER PROBLEMA*/

var numeronormal
var numerosuertudo
function valornumero1(){
    let numero=document.getElementById("valor").value;
    if((numero<=15) || (numero=55) || (numero=75)){
        numerosuertudo=true
        alert ("numero suertudo")
    }
    else{
        numeronormal=false
        alert ("numero normales")
    }
  
}


