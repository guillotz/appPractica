import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { NgModelComponent } from './componentes/ng-model/ng-model.component';
import { FuncionesComponent } from './componentes/funciones/funciones.component';
import { FormsModule } from '@angular/forms';
import { PrimerIntegradorComponent } from './componentes/primer-integrador/primer-integrador.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { SegundoIntegradorComponent } from './componentes/segundo-integrador/segundo-integrador.component';
import { RouteoComponent } from './componentes/routeo/routeo.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { InputComponent } from './componentes/comunicacion/input/input.component';
import { OutputComponent } from './componentes/comunicacion/output/output.component';
import { DefinicionComponent } from './componentes/comunicacion/definicion/definicion.component';
import { Hijo1Component } from './componentes/comunicacion/hijos/input/hijo1/hijo1.component';
import { Hijo2Component } from './componentes/comunicacion/hijos/input/hijo2/hijo2.component';
import { Hijo3Component } from './componentes/comunicacion/hijos/input/hijo3/hijo3.component';
import { Out1Component } from './componentes/comunicacion/hijos/output/out1/out1.component';
import { Out2Component } from './componentes/comunicacion/hijos/output/out2/out2.component';
import { Out3Component } from './componentes/comunicacion/hijos/output/out3/out3.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InterpolacionComponent,
    NgModelComponent,
    FuncionesComponent,
    PrimerIntegradorComponent,
    NgIfComponent,
    NgForComponent,
    SegundoIntegradorComponent,
    RouteoComponent,
    ServiciosComponent,
    InputComponent,
    OutputComponent,
    DefinicionComponent,
    Hijo1Component,
    Hijo2Component,
    Hijo3Component,
    Out1Component,
    Out2Component,
    Out3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
