export default class Cl_MCliente {
    constructor({cedula, producto, cantidad}, {preProducA, preProducB, preProducC}){ 
        this.cedula = cedula;
        this.productos = producto;
        this.cantidad = cantidad;
        this.preProducA = preProducA;
        this.preProducB = preProducB;
        this.preProducC = preProducC;
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

    set preProducA(Pa){
        this._preProducA = Pa;
    }

    get preProducA(){
        return this._preProducA;
    }

    set preProducB(Pb){
        this._preProducB = Pb;
    }
    get preProducB(){
        return this._preProducB;
    }

    set preProducC(Pc){
        this._preProducC = Pc;
    }
    get preProducC(){
        return this._preProducC;
    }

    Total(){
        if(this._Productos == "A"){
            return this._preProducA * this._Cantidad;
        } else if(this._Productos == "B"){
            return this._preProducB * this._Cantidad;
        } else if(this._Productos == "C"){
            return this._preProducC * this._Cantidad;
        } else {
            return 0;
        }
    }
}