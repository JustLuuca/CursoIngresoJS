/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	
	let aumento;
	
	let sueldoConAumento;
	
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = (sueldo / 100 * 10);
	
	sueldoConAumento = sueldo + aumento;
	
	document.getElementById("txtIdResultado").value = sueldoConAumento;

}
