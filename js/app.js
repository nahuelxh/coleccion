//alert()


/*let elegirObra = parseInt( prompt("¿Cúal es el valor de tu obra?"));

let formaDePago = prompt("¿Vas a pagar con tarjeta de Crédito?");



if(formaDePago=="si") {
    const cantidadDeCuotas = parseInt( prompt("¿En cúantas cuotas vas a abonar?.  3, 6 o 12"));

    let montoAPagar = 0;

    const cuotas = [3,6,12];

    montoAPagar = elegirObra / cantidadDeCuotas


PagoEnCuotas()


function PagoEnCuotas ()  {
    for (let i = 0; i < 3; i++) {
        if(cantidadDeCuotas == cuotas[0])
        [alert("En 3 cuotas el monto a pagar es $ " + elegirObra + " y cada cuota queda en $ " +  montoAPagar)];
        if(cantidadDeCuotas == cuotas[1])
        [alert("En 6 cuotas el monto a pagar es $ " + elegirObra + " y cada cuota queda en $ " +  montoAPagar)];
        if(cantidadDeCuotas == cuotas[2])
        [alert("En 12 cuotas el monto a pagar es $ " + elegirObra + " y cada cuota queda en $ " +  montoAPagar)];
    }

}
}else {alert("Con Débito el monto a pagar es $ " + elegirObra)}*/




/*const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: 60000,
    puertas: '',
    transmision: '',
    color: ''
}*/


const año = 2015



function mostrarObras(obras){
    obras.forEach(obra => {
        console.log(`${obra.titulo} - Medidas: ${obra.medidas} - Técnica: ${obra.tecnica} - Soporte: ${obra.soporte} - ${obra.año} - Precio: ${obra.precio}`) 
        document.write(`<p>${obra.titulo} - Medidas: ${obra.medidas} - Técnica: ${obra.tecnica} - Soporte: ${obra.soporte} - ${obra.año} - Precio: ${obra.precio}</p>`)
    });
}



function filtrarObras(){
    const resultado = obras.filter(filtrarAño)
    if(resultado.length){
        mostrarObras(resultado)
    }else {
        noResultado()
    }
}

function noResultado(){
    console.log("No se encontraron resultados para su elección")
    document.write("No se encontraron resultados para su elección")
}



function filtrarAño(obra){
    if(año){
        return obra.año === año
    }
    return obra;
}

//mostrarObras (obras)


filtrarObras()



/*function filtrarTitulo(obra){
    if(titulo){
        return obra.titulo === titulo
    }
    return obra;
}*/

/*function filtrarMedidas(obra){
    if(medidas){
        return obra.medidas === medidas
    }
    return obra;
}*/

/*function filtrarMinimo(obra){
    if(minimo){
        return obra.precio >= minimo
    }
    return obra;
}*/

/*function filtrarMaximo(obra){
    if(maximo){
        return obra.precio <= maximo
    }
    return obra;
}*/


/*function filtrarTecnica(obra){
    if(tecnica){
        return obra.tecnica === tecnica
    }
    return obra;
}

function filtrarSoporte(obra){
    if(soporte){
        return obra.soporte === soporte
    }
    return obra;
}*/






