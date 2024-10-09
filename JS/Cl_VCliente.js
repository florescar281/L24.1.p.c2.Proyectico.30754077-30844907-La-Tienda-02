export default class Cl_VCliente {
    constructor(controlador) {
        this.seccionCliente = document.getElementById("sectionCliente");
        this.cedCliente = document.getElementById("cedula");
        this.proCliente = document.getElementById("producto");
        this.canCliente = document.getElementById("cantidad");
        this.submit = document.getElementById("submit");
        this.submit.addEventListener.onclick = () => {
            controlador.mostrarVistaCliente();
            controlador.ingresarCliente({
                cedula: this.cedCliente.value,
                producto: this.proCliente.value,
                cantidad: this.canCliente.value
            })
            ocultar();
        }
    }

    mostrar() {
        this.seccionCliente.display = "block";
    }

    ocultar() {
        this.seccionCliente.display = "none";
    }
}