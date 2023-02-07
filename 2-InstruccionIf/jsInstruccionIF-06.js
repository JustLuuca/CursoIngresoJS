function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17)
	{
		mensaje = "Es mayor de edad";
	}else {
		
		if (edad >=13 && edad <=17)
		{
			mensaje = "Es adolescente"
	}else {
			mensaje = "Es menor de edad";

	}
	
	}
	alert(mensaje);


	



}//FIN DE LA FUNCIÓN