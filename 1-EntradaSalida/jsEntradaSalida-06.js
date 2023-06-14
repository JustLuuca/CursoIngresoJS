/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// declaracion de variables
	let numeroUno;
	let numeroDos;
	let resultado;

	// valor de variables
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numeroUno + numeroDos;

	alert("La suma es " + resultado);


	}
	






