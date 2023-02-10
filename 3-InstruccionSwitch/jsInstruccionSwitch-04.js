/*septiembre, con abril, junio y noviembre 30
/*febrero 28     
/*enero marzo mayo octubre julio agosto diciembre 31*/

function mostrar()

{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		
		case "Febrero":
			mensaje = "Este mes tiene 28 dias"
			break;

		case "Septiembre":
		case "Abril":
		case "Junio":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias"
			break;
			
		default:
			mensaje = "Este mes tiene 31 dias"
			break;


	}

		alert(mensaje);





	
	
	



}//FIN DE LA FUNCIÓN