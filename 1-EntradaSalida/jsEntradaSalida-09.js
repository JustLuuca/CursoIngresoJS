/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function aumento()
{
	let numeroIngresado;
    let resultado;
    let porcentajeAmodificar;

    porcentajeAmodificar = 10 / 100;
    numeroIngresado = parseInt(document.getElementById("txtIdImporte").value);
    resultado = numeroIngresado + (numeroIngresado * porcentajeAmodificar);
    document.getElementById("txtIdResultado").value = resultado;
}
