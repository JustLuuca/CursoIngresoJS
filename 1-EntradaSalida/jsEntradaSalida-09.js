/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function aumento()
{
	let sueldo;
	
	let aumento;
	
	let resultado;
	
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	
	aumento = sueldo * 0,1;
	resultado = sueldo + aumento;
	
	document.getElementById("txtIdSueldo").value = resultado;
}
