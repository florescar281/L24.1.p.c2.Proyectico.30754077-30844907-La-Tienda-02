export class mCliente {
    constructor({cedula, producto, cantidad}){  
        this.cedula = cedula;
        this.productos = producto;
        this.cantidad = cantidad;
    }

    set cedula(c){
        this._Cedula = c;
    }    
    get cedula(){
        return this._Cedula;
    }

    set productos(p){
        this._Productos = p;
    }

    get productos(){
        return this._Productos;
    }
    
    set cantidad(ct){
        this._Cantidad = +ct;
    }
    get cantidad(){
        return this._Cantidad;
    }

    Total(){
        if(this._Productos == "A"){
            return 10 * this._Cantidad;
        } else if(this._Productos == "B"){
            return 5 * this._Cantidad;
        } else if(this._Productos == "C"){
            return 20 * this._Cantidad;
        } else {
            return 0;
        }
    }
}