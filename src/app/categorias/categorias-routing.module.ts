import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent} from "./categorias.component";
import {InicioComponent} from "./inicio/inicio.component";
import {DesayunoComponent} from "./desayuno/desayuno.component";
import {AlmuerzoComponent} from "./almuerzo/almuerzo.component";
import {CenaComponent} from "./cena/cena.component";
import {PostresComponent} from "./postres/postres.component";
import {SuperavitComponent} from "./superavit/superavit.component";
import {DeficitComponent} from "./deficit/deficit.component";
import {CardBodyComponent} from "./card-body/card-body.component";

const routes: Routes = [

  { path: '', component: CategoriasComponent, children: [{path:"", component: InicioComponent}]},
  { path: 'desayuno', component: CategoriasComponent, children: [{path:"", component: DesayunoComponent}]},
  { path: 'almuerzo', component: CategoriasComponent, children: [{path:"", component: AlmuerzoComponent}]},
  { path: 'cena', component: CategoriasComponent, children: [{path:"", component: CenaComponent}]},
  { path: 'postres', component: CategoriasComponent, children: [{path:"", component: PostresComponent}]},
  { path: 'superavit', component: CategoriasComponent, children: [{path:"", component: SuperavitComponent}]},
  { path: 'deficit', component: CategoriasComponent, children: [{path:"", component: DeficitComponent}]},
  { path: 'cardBody', component: CategoriasComponent, children: [{path:":id", component: CardBodyComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
