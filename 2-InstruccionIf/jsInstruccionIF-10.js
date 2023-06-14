function mostrar()
{
	let numRandom;
	let mensaje;

	numRandom = Math.floor(Math.random() * 10 + 1);

	if(numRandom >= 9)
	{
		mensaje = numRandom + " Excelente";
	}
	else {
		if(numRandom >= 4)

	{
		mensaje = numRandom + " Aprobó";

	}
	else {
		mensaje = numRandom + " Vamos, la próxima se puede";

	}

	console.log(mensaje);


	
}


}//FIN DE LA FUNCIÓN