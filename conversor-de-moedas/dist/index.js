


function contabilizar(){
let moedaReal = document.getElementById('moedaReal');
let moedaUSD = document.getElementById('moedaDolar');

let real;
// let dolar;

real = moedaReal.value;
moedaUSD.value = real * 5.76;


window.alert(moedaReal.value );

}