import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./explorador/explorador.module').then((m) => m.ExploradorModule) },
  { path: 'ingresar', loadChildren: () => import('./creador/creador.module').then((m) => m.CreadorModule) },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then((m) => m.CategoriasModule) },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
