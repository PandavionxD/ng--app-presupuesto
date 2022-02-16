import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingresoService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos:Ingreso[]=[]

  constructor(private ingresoService:IngresoService){}

  ngOnInit(): void {
  this.ingresos = this.ingresoService.ingreso
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoService.eliminarIngreso(ingreso)
  }

}
