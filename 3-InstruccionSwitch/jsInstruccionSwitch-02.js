function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frío"
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno"
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora el calor!!!"	
			break;


	}
      alert(mensaje);



}//FIN DE LA FUNCIÓN