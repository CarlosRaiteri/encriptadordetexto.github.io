function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
 
    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto-principal").style.display = "none";
    document.getElementById("texto-secundario").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
 }