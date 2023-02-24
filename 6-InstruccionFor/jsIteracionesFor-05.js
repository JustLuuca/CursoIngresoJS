function mostrar()
{
	let condicion;
	let mensaje;

	let i;

	for (i = 0; i < Infinity; i++) {
		condicion = parseInt(prompt("Ingrese el numero que desee. Si quiere finalizar la operacion ingrese '9'."));

		while (isNaN(condicion)) {
			condicion = parseInt(prompt("Ingrese un valor numerico"));
		}
		if (condicion == "9") {
			mensaje = "Usted ha finalizado la operacion con 9";
			alert(mensaje);
			break;
		}
		else {
			mensaje = "Ingrese un numero o termine la operacion con '9'."
			alert(mensaje);
		}
	}



}//FIN DE LA FUNCIÓN