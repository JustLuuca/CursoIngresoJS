/*barilo se viaja,resto no se viaja-invierno
mardel y cataratas se viaja,resto no-verano
se viaja a todos lados-otoño
solo no se viaja a bariloche-primavera*/
function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja";	
			}
			else if(destino != "Bariloche"){
				mensaje = "No se viaja";
			}
			break;

		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja";
			}	
			else if(destino == "Bariloche" || destino == "Cordoba"){
				mensaje = "No se viaja";
			}
			break;

		case "Otoño":
			if(destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas" || destino == "Cordoba"){
				mensaje = "Se viaja";
			}	
			break;

		case "Primavera":
			if(destino == "Bariloche"){
				mensaje = "No se viaja";
			}	
			else if(destino != "Bariloche"){
				mensaje = "Se viaja";
			}
			break;

			
			
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN