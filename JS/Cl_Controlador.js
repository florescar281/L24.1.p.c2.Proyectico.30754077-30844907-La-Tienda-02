import { Cl_VCliente } from "./Cl_VCliente.js";
import { Cl_VTienda } from "./Cl_VTienda.js";  
import { Cl_MCliente } from "./Cl_MCliente.js";
import { Cl_MTienda } from "./Cl_MTienda.js";
import { Cl_Complementos } from "./Cl_Complementos.js";

export class Cl_Controlador {
    constructor() {
        this.vCliente = new Cl_VCliente();
        this.vTienda = new Cl_VTienda();
        this.mTienda = new Cl_MTienda();
        this.Cl_Complementos = new Cl_Complementos();
        this.salida1 = document.getElementById("salida1");
        this.salida2 = document.getElementById("salida2");
        this.salidaTabla = document.getElementById("table");
    }    
    iniciar() { 
        let precios = this.Cl_Complementos.consultarPrecios();
        do {
            let datos = this.vCliente.leerDatos();
            let cliente = new Cl_MCliente(datos, precios);
            this.mTienda.procesarCliente(cliente);
            this.vCliente.mostrarCliente(this.salidaTabla, cliente._Cedula, cliente._Productos, cliente._Cantidad, cliente.Total());
        } while (confirm("¿Desea ingresar otro cliente?")) {
            this.vTienda.mostrarTienda(this.salida1, this.salida2, this.mTienda.devolverMayor(), this.mTienda.devolverTotalFinal());
        }
    }
}