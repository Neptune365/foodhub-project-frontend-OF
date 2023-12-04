import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreadorComponent} from "./creador.component";
import { BodyCreadorExplorarRecetasComponent} from "./body-creador-explorar-recetas/body-creador-explorar-recetas.component";
import { BodyCreadorGestionRecetasComponent} from "./body-creador-gestion-recetas/body-creador-gestion-recetas.component";
import {BodyCreadorMiPerfilComponent} from "./body-creador-mi-perfil/body-creador-mi-perfil.component";
import {BodyCreadorCrearRecetaComponent} from "./body-creador-crear-receta/body-creador-crear-receta.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  { path: '', component: CreadorComponent, children: [ {path: '', component: BodyCreadorExplorarRecetasComponent}]},
  { path: 'gestionDeRecetas', component: CreadorComponent, canActivate: [AuthGuard], children: [ {path: '', component: BodyCreadorGestionRecetasComponent}]},
  { path: 'miPerfil', component: CreadorComponent, canActivate: [AuthGuard], children: [ {path: '', component: BodyCreadorMiPerfilComponent}]},
  { path: 'crearReceta', component: CreadorComponent, canActivate: [AuthGuard], children: [ {path: '', component: BodyCreadorCrearRecetaComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreadorRoutingModule { }
