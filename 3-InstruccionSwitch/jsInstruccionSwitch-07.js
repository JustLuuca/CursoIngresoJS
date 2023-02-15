/*bariloche oeste
cataratas norte
ushuaia sur
mardel este*/

function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;


	switch(destino){
		case "Bariloche":
			mensaje = "Se encuentra en el oeste"
			break;

		case "Cataratas":
			mensaje = "Se encuentra en el norte"
			break;

		case "Mar del plata":
			mensaje = "Se encuentra en el este"
			break;

		case "Ushuaia":
			mensaje = "Se encuentra en el sur"
			break;
			
	}
		alert(mensaje);


	

}//FIN DE LA FUNCIÓN