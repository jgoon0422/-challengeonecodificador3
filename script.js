


function encriptar (){
    

    var texto = document.querySelector("#inputTexto").value.toLowerCase();
    var txtencriptado = texto.replace(/e/gi, "enter");
    var txtencriptado = txtencriptado.replace(/i/gi, "imes");
    var txtencriptado = txtencriptado.replace(/a/gi, "ai");
    var txtencriptado = txtencriptado.replace(/o/gi, "ober");
    var txtencriptado = txtencriptado.replace(/u/gi, "ufat");
    document.querySelector("#mensajeAqui").value = txtencriptado;
    document.querySelector("#inputTexto").value;

    document.getElementById("imMuneco").style.display = "none";
	document.getElementById("ningunMensaje").style.display = "none";
	document.getElementById("mensajeAqui").innerHTNL = txtencriptado;
	document.getElementById("imMuneco").style.display = "none";
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

    var boton1 = document.querySelector("bttn-encriptar"); boton1.onclick = encriptar;
    }

    
   

function desencriptar (){ 
var texto = document.querySelector("#inputTexto").value.toLowerCase(); 
var txtencriptado = texto.replace(/enter/gi, "e");
var txtencriptado = txtencriptado.replace(/imes/gi, "i");
var txtencriptado = txtencriptado.replace(/ai/gi, "a");
var txtencriptado = txtencriptado.replace(/ober/gi, "o")
var txtencriptado = txtencriptado.replace(/ufat/gi, "u"); 
document.querySelector("#mensajeAqui").value = txtencriptado; 
document.querySelector("#inputTexto").value;
var boton1 = document.querySelector("bttn-desencriptar"); boton1.onclick = encriptar;
}





function copy() {
	var  contenido = document.querySelector("#mensajeAqui");
	contenido.select();
	document.execCommand("copiar");
	alert("Se copio");

}