import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionesComponent } from './componentes/funciones/funciones.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgModelComponent } from './componentes/ng-model/ng-model.component';
import { PrimerIntegradorComponent } from './componentes/primer-integrador/primer-integrador.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
