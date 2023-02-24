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

    console.log("La cantidad de divisores de " + numero + " es " + divisores);


}//FIN DE LA FUNCIÓN