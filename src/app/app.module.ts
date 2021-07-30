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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InterpolacionComponent,
    NgModelComponent,
    FuncionesComponent,
    PrimerIntegradorComponent,
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