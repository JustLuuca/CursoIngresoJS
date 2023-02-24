function mostrar()
{
	let numeroIngresado;
	let contadorPares;

	let mensajePares;

	let i;

	numeroIngresado = parseInt(prompt("Ingrese un número:"));
	contadorPares = 0

	for (i = 1; i <= numeroIngresado; i++) {

		if (i % 2 == 0) {
			console.log(i);
			contadorPares++;
		}
	}
	mensajePares = ("Pares encontrados: " + contadorPares);
	console.log(mensajePares);



}//FIN DE LA FUNCIÓN