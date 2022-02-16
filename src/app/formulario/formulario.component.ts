import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egresoService.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingresoService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'ingresoInput'
  valorInput:number
  descripcionInput:string

  agregarTipo(evento:any){
    this.tipo = evento.target.value
  }

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService) { }

  ngOnInit(): void {
  }

  enviarDato(){
    if (this.tipo ==='ingresoInput'){
      this.ingresoService.agregarIngreso(new Ingreso(this.descripcionInput,this.valorInput))
    }else{
      this.egresoService.agregarEgreso(new Egreso(this.descripcionInput,this.valorInput))
    }
  }
    
    
  }


