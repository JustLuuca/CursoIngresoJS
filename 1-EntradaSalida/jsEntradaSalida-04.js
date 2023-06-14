/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// declaracion de variables
	let nombreIngresado;
	
	// valor de variables
	nombreIngresado = prompt("Ingresar nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;

}

