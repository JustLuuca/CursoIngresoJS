
function mostrar()
{
let nombreTitular;
let destino;
let temporada;
let cantidadDias;
let importe;
let alturaPasajero;
let pesoPasajero;
let sexoPasajero;
let equipaje;
let metodoDePago;

nombreTitular = prompt("Ingrese su nombre")
{
    while(!isNaN(nombreTitular)){
        nombreTitular = prompt("Error. Ingrese su nombre")
    }
    destino = prompt("Escoja su destino: 'Puerto Madryn', 'Villa Gessel', 'Córdoba'")
    {
        while(!isNaN(destino != 'Puerto Madryn' && destino != 'Villa Gessel' && destino != 'Córdoba'));
        {
            destino = prompt("Error. Ingrese un destino válido: 'Puerto Madryn', 'Villa Gessel', 'Córdoba'")
        }
    }
    temporada = prompt("Viaja en temporada: 'Alta', 'Baja'")
        while(!isNaN(temporada != 'Alta' && temporada != 'Baja'));
        {
            temporada = prompt("Error. Ingrese una temporada valida")
        }
    
    
}
}
