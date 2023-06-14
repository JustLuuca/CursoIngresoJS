/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let NumeroUno;
	
	let NumeroDos;
	
	let resultado;
	
	NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = NumeroUno + NumeroDos;
	
	alert("la suma es "+ resultado);


	}
	






