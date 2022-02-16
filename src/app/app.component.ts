import { Component } from '@angular/core';
import { Egreso } from './egresos/egreso.model';
import { EgresoService } from './egresos/egresoService.service';
import { Ingreso } from './ingresos/ingreso.model';
import { IngresoService } from './ingresos/ingresoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:Ingreso[]=[]
  egresos:Egreso[]=[]

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService){
                this.ingresos = ingresoService.ingreso;
                this.egresos = egresoService.egreso

              }

  ingresosTotales(){
    let ingresoTotal:number= 0
    this.ingresos.forEach((ingreso)=>{
      ingresoTotal += ingreso.valor
    })
    return ingresoTotal
  }

  egresosTotales(){
    let egresoTotal:number= 0
    this.egresos.forEach((egreso)=>{
      egresoTotal += egreso.valor
    })
    return egresoTotal
  }
  
  presupuestoDisponible(){
    return this.ingresosTotales()-this.egresosTotales()
  }

  porcentajeEgreso(){
    return this.egresosTotales()/this.ingresosTotales()
  }
}
