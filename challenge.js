let areaEntrada = document.getElementById("entrada");
let areaSalida = document.getElementById("resultado");
let btnEncryptar = document.getElementById("encriptar");
let btnDesencryptar = document.getElementById("desencriptar");
let btnCopy = document.getElementById("copy")

btnEncryptar.addEventListener("click", encriptar);
function encriptar(){
let texto=areaEntrada.value; 
texto=texto.toLowerCase();
let encriptado="";
for(let i=0;i<texto.length;i++){
    encriptado+=encriptador(texto[i]);
}
areaSalida.value=encriptado;
}
function encriptador(letra){
let salida;
switch(letra){
case "a":
    salida = "ai";
    break;
case "e":
    salida = "enter"; 
    break;
case "i":
    salida = "imes";
    break;
case "o":
    salida = "ober";
    break;
case "u":
    salida = "ufat";
    break;
default:
    salida=letra;
}
return salida;
}
function desencriptador(){
   
    let texto=areaEntrada.value; 
    texto=texto.replaceAll("enter", "e");
    texto=texto.replaceAll("ai", "a");
    texto=texto.replaceAll("imes", "i");
    texto=texto.replaceAll("ober", "o");
    texto=texto.replaceAll("ufat", "u");
    areaSalida.value=texto
}
btnDesencryptar.addEventListener("click", desencriptador);


function copiar(){
    let seleccionarTexto = document.querySelector("#resultado");
    seleccionarTexto.select()
    let cop = document.execCommand("copy");
    alert("Mensaje copiado");
}
btnCopy.addEventListener("click", copiar)
