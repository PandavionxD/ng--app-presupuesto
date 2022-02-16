import { Ingreso } from "./ingreso.model"

export class IngresoService{
    ingreso:Ingreso[]=[
        new Ingreso('Sueldo',3000),
        new Ingreso('Venta de guitarra',450)
    ]

    agregarIngreso(ingreso:Ingreso){
    this.ingreso.push(ingreso)
    }

    eliminarIngreso(ingresoEliminado:Ingreso){
        let index = this.ingreso.indexOf(ingresoEliminado)
        this.ingreso.splice(index,1)
    }


}