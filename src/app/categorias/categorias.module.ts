import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule} from "./categorias-routing.module";
import { CategoriasComponent} from "./categorias.component";
import { DesayunoComponent } from './desayuno/desayuno.component';
import { AlmuerzoComponent } from './almuerzo/almuerzo.component';
import { CenaComponent } from './cena/cena.component';
import { PostresComponent } from './postres/postres.component';
import { SuperavitComponent } from './superavit/superavit.component';
import { DeficitComponent } from './deficit/deficit.component';
import { InicioComponent } from './inicio/inicio.component';
import { SidebarComponent} from "./sidebar/sidebar.component";
import { CardBodyComponent } from './card-body/card-body.component';
import {CreadorModule} from "../creador/creador.module";
import {HeaderExploradorComponent} from "../explorador/header-explorador/header-explorador.component";
import {HeaderCreadorComponent} from "../creador/header-creador/header-creador.component";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    CategoriasComponent,
    DesayunoComponent,
    AlmuerzoComponent,
    CenaComponent,
    PostresComponent,
    SuperavitComponent,
    DeficitComponent,
    InicioComponent,
    CardBodyComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        CategoriasRoutingModule,
        HeaderExploradorComponent,
        CreadorModule,
        NgxPaginationModule,

    ],
  exports: [
    CategoriasComponent,
    InicioComponent,
  ]
})
export class CategoriasModule { }

