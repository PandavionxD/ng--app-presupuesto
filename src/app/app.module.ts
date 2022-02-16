import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresoService } from './ingresos/ingresoService.service';
import { EgresoService } from './egresos/egresoService.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
