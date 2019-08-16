import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosListComponent } from '../app/components/servicios-list/servicios-list.component';
import { ServiciosFormComponent } from '../app/components/servicios-form/servicios-form.component';
import { TipousuarioListComponent } from '../app/components/tipousuario-list/tipousuario-list.component';
import { CardsComponent } from '../app/components/cards/cards.component';
import { FormPublicacionesComponent } from '../app/components/form-publicaciones/form-publicaciones.component';
import { TipousuarioFormComponent } from '../app/components/tipousuario-form/tipousuario-form.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'servicios', component: ServiciosListComponent},
  {path: 'add-servicio', component: ServiciosFormComponent},
  {path: 'edit-servicio/:id', component:ServiciosFormComponent },
  {path: 'tipoUsuario', component: TipousuarioListComponent},
  {path: 'add-tipousuario', component: TipousuarioFormComponent},
  {path: 'publicaciones', component: CardsComponent},
  {path: 'add-publicacion', component: FormPublicacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
