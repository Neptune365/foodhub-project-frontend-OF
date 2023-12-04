import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreadorRoutingModule} from "./creador-routing.module";
import { CreadorComponent} from "./creador.component";
import { HeaderCreadorComponent } from './header-creador/header-creador.component';
import { BodyCreadorExplorarRecetasComponent } from './body-creador-explorar-recetas/body-creador-explorar-recetas.component';
import { BodyCreadorGestionRecetasComponent } from './body-creador-gestion-recetas/body-creador-gestion-recetas.component';
import { BodyCreadorMiPerfilComponent } from './body-creador-mi-perfil/body-creador-mi-perfil.component';
import { BodyCreadorCrearRecetaComponent } from './body-creador-crear-receta/body-creador-crear-receta.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreadorComponent,
    HeaderCreadorComponent,
    BodyCreadorExplorarRecetasComponent,
    BodyCreadorGestionRecetasComponent,
    BodyCreadorMiPerfilComponent,
    BodyCreadorCrearRecetaComponent
  ],
  exports: [
    HeaderCreadorComponent
  ],
  imports: [
    CommonModule,
    CreadorRoutingModule,
    FormsModule
  ]
})
export class CreadorModule { }



