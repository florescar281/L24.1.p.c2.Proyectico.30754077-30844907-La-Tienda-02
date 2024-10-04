export class Cl_MTienda {
    constructor(){
        this.mayor = 0;
        this.auxNomProduc = " ";
        this.acumTotal = 0;
        this.acumProducA = 0;
        this.acumProducB = 0;
        this.acumProducC = 0;
    }

    procesarCliente(cli){
        this.acumTotal += cli.Total();

        if(cli._Productos == "A"){
            this.acumProducA += cli._Cantidad;
        } else if(cli._Productos == "B"){
            this.acumProducB += cli._Cantidad;
        } else if(cli._Productos == "C"){
            this.acumProducC += cli._Cantidad;
        }

        if(this.acumProducA > this.mayor){
            this.mayor = this.acumProducA;
            this.auxNomProduc = cli._Productos;
        } else if(this.acumProducB > this.mayor){
            this.mayor = this.acumProducB;
            this.auxNomProduc = cli._Productos;
        } else if(this.acumProducC > this.mayor){
            this.mayor = this.acumProducC;
            this.auxNomProduc = cli._Productos;
        }
    }

    devolverTotalFinal(){
        return this.acumTotal;
    }

    devolverMayor(){
        return this.auxNomProduc;
    }
}