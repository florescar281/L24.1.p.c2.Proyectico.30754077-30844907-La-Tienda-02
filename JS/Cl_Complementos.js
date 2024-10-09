export default class Cl_Complementos {
    consultarPrecios() {
        let preProducA = prompt("Ingrese el precio del producto A:");
        let preProducB = prompt("Ingrese el precio del producto B:");
        let preProducC = prompt("Ingrese el precio del producto C:");
        return {preProducA, preProducB, preProducC};
    }
}