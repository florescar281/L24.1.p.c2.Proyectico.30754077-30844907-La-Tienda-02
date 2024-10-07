export default class vTienda {
    constructor(){  
        this.seccionTienda = document.getElementById("seccionTienda");
        this.salida1 = document.getElementById("salida1");
        this.salida2 = document.getElementById("salida2");
        this.botonAgregarCliente = document.getElementById("btn");
        this.tabla = document.getElementById("table");
    }

    ocultar(){  
        this.seccionTienda.hidden = true;
    }

    mostrar(){
        this.seccionTienda.hidden = false;
    }

    mostrarTienda({
        cedula,
        producto,
        cantidad,
        total,
        devolverTotalFinal,
        devolverMayor
    }){
        this.tabla.innerHTML += `
            <tr>
                <td>${cedula}</td>
                <td>${producto}</td>
                <td>${cantidad}</td>
                <td>${total}</td>
            </tr>
        `;
        this.salida1.innerHTML = `${devolverMayor()}`;
        this.salida2.innerHTML = `${devolverTotalFinal()}`
    }
}