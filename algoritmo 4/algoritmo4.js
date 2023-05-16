const lista=document.querySelector("#lista");
const inputNumero=document.querySelector("input");

// VALOR_GENERADO = 0;

function generarHola() {
    //i=inputNumero;
    let numIngresado =inputNumero.value;
    for (let i = 0; i <= numIngresado ; i++) {
       lista.innerHTML+= (`Hola <br>`);
        
    }
}