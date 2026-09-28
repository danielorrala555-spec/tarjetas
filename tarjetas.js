function recupearTexto(idComponente){
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;   
}

function recuperarFloat(idComponente){
    let valorTexto = recupearTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
function crearTarjetas(){
    let desde = recuperarFloat("textoDesde");
    let hasta = recuperarFloat("textoHasta");
    let contenido ="";
    let divTarjetas = document.getElementById("divTarjetas")
    for(let i=desde; i<=hasta; i++){
        contenido = contenido + "<div class='item'>"+i+"</div>";
        divTarjetas.innerHTML = contenido;
    }
    
}

