function mostrar()
{
	let i;
	let repeticiones = prompt("ingrese el número de repeticiones");
	let mensaje;

	repeticiones = parseInt(prompt("ingrese el número de repeticiones"))
    mensaje = "Hola UTN FRA"

    for(i = 0; i < repeticiones ; i++) 
    {
        document.write(mensaje);
    }
	


}//FIN DE LA FUNCIÓN