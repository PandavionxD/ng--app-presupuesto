import { Egreso } from "./egreso.model";

export class EgresoService{
    egreso:Egreso[]=[
        new Egreso('Alquiler vivienda',900),
        new Egreso('Compra de mueble',250)
    ]

    agregarEgreso(egreso:Egreso){
    this.egreso.push(egreso)
    }

    eliminarEgreso(egreso:Egreso){
        let registro01 = this.egreso.indexOf(egreso)
        this.egreso.splice(registro01,1)
    }

}