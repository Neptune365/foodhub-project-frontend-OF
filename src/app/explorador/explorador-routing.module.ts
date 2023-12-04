import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExploradorComponent} from "./explorador.component";
import {BodyExploradorInicioComponent} from "./body-explorador-inicio/body-explorador-inicio.component";
import {BodyExploradorExplorarRecetasComponent} from "./body-explorador-explorar-recetas/body-explorador-explorar-recetas.component";
import {BodyExploradorIniciarSesionComponent} from "./body-explorador-iniciar-sesion/body-explorador-iniciar-sesion.component";
import {BodyExploradorCrearCuentaComponent} from "./body-explorador-crear-cuenta/body-explorador-crear-cuenta.component";
import {CreadorComponent} from "../creador/creador.component";
import {BodyCreadorExplorarRecetasComponent} from "../creador/body-creador-explorar-recetas/body-creador-explorar-recetas.component";
import {CategoriasComponent} from "../categorias/categorias.component";
import {InicioComponent} from "../categorias/inicio/inicio.component";
import {DesayunoComponent} from "../categorias/desayuno/desayuno.component";
import {AlmuerzoComponent} from "../categorias/almuerzo/almuerzo.component";
import {CenaComponent} from "../categorias/cena/cena.component";
import {PostresComponent} from "../categorias/postres/postres.component";
import {SuperavitComponent} from "../categorias/superavit/superavit.component";
import {DeficitComponent} from "../categorias/deficit/deficit.component";


const routes: Routes = [

  { path: '', component: ExploradorComponent, children: [ {path: '', component: BodyExploradorInicioComponent}]},
  { path: 'explorarRecetas', component: ExploradorComponent, children: [ {path: '', component: BodyExploradorExplorarRecetasComponent}]},



  { path: 'iniciarSesion', component: ExploradorComponent, children: [ {path: '', component: BodyExploradorIniciarSesionComponent}]},
  { path: 'cocinaTuCuenta', component: ExploradorComponent, children: [ {path: '', component: BodyExploradorCrearCuentaComponent}]},

  { path: 'ingresar', component: CategoriasComponent, children: [ { path: '', component: InicioComponent}]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploradorRoutingModule { }
