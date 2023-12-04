import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorRoutingModule} from "./explorador-routing.module";
import { ExploradorComponent} from "./explorador.component";

import { HeaderExploradorComponent} from "./header-explorador/header-explorador.component";
import { BodyExploradorInicioComponent } from './body-explorador-inicio/body-explorador-inicio.component';
import { BodyExploradorExplorarRecetasComponent } from './body-explorador-explorar-recetas/body-explorador-explorar-recetas.component';
import { BodyExploradorIniciarSesionComponent } from './body-explorador-iniciar-sesion/body-explorador-iniciar-sesion.component';
import { BodyExploradorCrearCuentaComponent } from './body-explorador-crear-cuenta/body-explorador-crear-cuenta.component';
import {CreadorModule} from "../creador/creador.module";
import {CategoriasComponent} from "../categorias/categorias.component";

import {CategoriasModule} from "../categorias/categorias.module";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    ExploradorComponent,
    BodyExploradorInicioComponent,
    BodyExploradorExplorarRecetasComponent,
    BodyExploradorIniciarSesionComponent,
    BodyExploradorCrearCuentaComponent,
  ],

  exports: [
    HeaderExploradorComponent,

  ],
    imports: [
        CommonModule,
        ExploradorRoutingModule,
        HeaderExploradorComponent,
        CreadorModule,
        CategoriasModule,
        FormsModule,

    ]
})
export class ExploradorModule { }
