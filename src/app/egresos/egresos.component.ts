import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egresoService.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos:Egreso[]=[]

  @Input() ingresosTotales:number

  constructor(private egresoService:EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egreso
  }

  calculoPorcentajeEgreso(egreso:Egreso){
    let num = egreso.valor
    let total = num/this.ingresosTotales
    // console.log(typeof num)
    console.log(typeof this.ingresosTotales)
    return total
    
  }

  eliminarRegistro(egreso:Egreso){
    this.egresoService.eliminarEgreso(egreso)
  }

}
