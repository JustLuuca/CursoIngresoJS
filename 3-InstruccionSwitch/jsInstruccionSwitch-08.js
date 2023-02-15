function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;


	switch(destino){
		case "Bariloche":
			mensaje = "En este destino hace frio"
			break;

		case "Cataratas":
			mensaje = "En este destino hace calor"
			break;

		case "Mar del plata":
			mensaje = "En este destino hace calor"
			break;

		case "Ushuaia":
			mensaje = "En este destino hace frio"
			break;
			
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN