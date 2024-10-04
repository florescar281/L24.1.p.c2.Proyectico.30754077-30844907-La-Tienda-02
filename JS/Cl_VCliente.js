export class Cl_VCliente {
    constructor() {
    }

    leerDatos() {
        let cedula = document.getElementById("cedula").value;
        let producto = document.getElementById("producto").value;
        let cantidad = document.getElementById("cantidad").value;
        return {cedula, producto, cantidad};
    }
    mostrarCliente(salidaTabla, cedula, producto, cantidad, total) {
        salidaTabla.innerHTML += `
        <tr>
            <th>${cedula}</th>
            <th>${producto}</th>
            <th>${cantidad}</th>
            <th>${total}</th>
        </tr>`;
    }
}