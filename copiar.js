function copy(){
    var contenido = document.querySelector("#texto-secundario");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}