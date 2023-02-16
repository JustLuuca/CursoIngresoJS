/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	
	clave = prompt("ingrese el número clave.");

	while(clave != "utn750"){
		clave = prompt("La clave es invalida. Reingrese clave: ")
	}
	alert("La clave es valida");
	
}//FIN DE LA FUNCIÓN
