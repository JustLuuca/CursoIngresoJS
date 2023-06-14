function mostrar()
{

	let numero;
    let divisores;

    divisores = 0;
    numero = parseInt(prompt("Ingrese un numero"));

    for(let i = 1; i <= numero; i++){
        
        if(numero % i == 0)
        {
            
            divisores = divisores + 1;
        }
    }

    if(divisores == 2)
    {
        alert("Es primo");
    
    }else{
        alert("No es primo")
    
        }

    console.log("La cantidad de divisores de " + numero + " es " + divisores);

    
    
	

}//FIN DE LA FUNCIÓN