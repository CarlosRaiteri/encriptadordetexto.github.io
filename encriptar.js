function encriptar(){
   var texto = document.getElementById("inputTexto").value.toLowerCase();
   
   var textoCifrado = texto.replace(/e/igm,"enter");
   var textoCifrado = textoCifrado.replace(/o/igm,"ober");
   var textoCifrado = textoCifrado.replace(/i/igm,"imes");
   var textoCifrado = textoCifrado.replace(/a/igm,"ai");
   var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

   document.getElementById("imagen-derecha").style.display = "none";
   document.getElementById("texto-principal").style.display = "none";
   document.getElementById("texto-secundario").innerHTML = textoCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";
}
