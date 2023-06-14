/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoingresado;
	
	datoingresado = prompt("Ingresar dato");
	
	document.getElementById("txtIdNombre").value = datoingresado;
}

