import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() ingresosTotales:number
  @Input() egresosTotales:number
  @Input() presupuesto:number
  @Input() porcentajeEgreso:number

  constructor() { }

  ngOnInit(): void {
  }

}
