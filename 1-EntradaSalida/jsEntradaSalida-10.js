/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
	let numeroIngresado;
    let resultado;
    let porcentajeAmodificar;

    porcentajeAmodificar = -25 / 100;
    numeroIngresado = parseInt(document.getElementById("txtIdImporte").value);
    resultado = numeroIngresado + (numeroIngresado * porcentajeAmodificar);
    document.getElementById("txtIdResultado").value = resultado;
	
}
