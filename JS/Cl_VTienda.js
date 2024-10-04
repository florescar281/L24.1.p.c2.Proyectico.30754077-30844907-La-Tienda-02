export class vTienda {
    constructor(){  
        
    }

    mostrarTienda(salida, devolverMayor, devolverTotalFinal){
        salida.innerHTML += `El articulo que más se vende es: ${devolverMayor}<br>
        El total de la tienda es de: ${devolverTotalFinal}`;
    }
    
}