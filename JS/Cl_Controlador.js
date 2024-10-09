import Cl_VCliente from "./Cl_VCliente.js";
import Cl_VTienda from "./Cl_VTienda.js";  
import Cl_MCliente from "./Cl_MCliente.js";
import Cl_MTienda from "./Cl_MTienda.js";
import Cl_Complementos from "./Cl_Complementos.js";

export class Cl_Controlador {
    constructor() {
        this.vCliente = new Cl_VCliente (this);
        this.vTienda = new Cl_VTienda(this);
        this.mTienda = new Cl_MTienda();
        this.complementos = new Cl_Complementos();
        this.mostrarVistaTienda();
    }    

    mostrarVistaCliente() {
        this.vCliente.mostrar();
        this.vTienda.ocultar();
    }

    mostrarVistaTienda() {
        this.vTienda.mostrar();
        this.vCliente.ocultar();
    }
    
    ingresarCliente({cedula, producto, cantida}) {
        let precios = this.complementos.consultarPrecios();
        let cliente = new Cl_MCliente({cedula, producto, cantida}, precios);
        this.mTienda.procesarCliente(cliente);
        this.vTienda.mostrarTienda({
            cedula: cliente._Cedula,
            producto: cliente._Productos,
            cantidad: cliente._Cantidad,
            total: cliente.Total(),
            devolverTotalFinal: this.mTienda.devolverTotalFinal(),
            devolverMayor: this.mTienda.devolverMayor()
        });
        this.mostrarVistaTienda();
    }
}