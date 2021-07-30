import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionesComponent } from './componentes/funciones/funciones.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
