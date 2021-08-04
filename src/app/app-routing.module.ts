import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinicionComponent } from './componentes/comunicacion/definicion/definicion.component';
import { InputComponent } from './componentes/comunicacion/input/input.component';
import { OutputComponent } from './componentes/comunicacion/output/output.component';
import { FuncionesComponent } from './componentes/funciones/funciones.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgModelComponent } from './componentes/ng-model/ng-model.component';
import { PrimerIntegradorComponent } from './componentes/primer-integrador/primer-integrador.component';
import { RouteoComponent } from './componentes/routeo/routeo.component';
import { SegundoIntegradorComponent } from './componentes/segundo-integrador/segundo-integrador.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    component: InterpolacionComponent
  },
  {
    path: 'interpolacion',
    component: InterpolacionComponent
  },
  {
    path: 'ngmodel',
    component: NgModelComponent
  },
  {
    path: 'funciones',
    component: FuncionesComponent
  },
  {
    path: 'primer_integrador',
    component: PrimerIntegradorComponent
  },
  {
    path: 'ngIf',
    component: NgIfComponent
  },
  {
    path: 'ngFor',
    component: NgForComponent
  },
  {
    path: 'segundo_integrador',
    component: SegundoIntegradorComponent
  },
  {
    path: 'routeo',
    component: RouteoComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'output',
    component: OutputComponent
  },
  {
    path: 'definicionIo',
    component: DefinicionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
