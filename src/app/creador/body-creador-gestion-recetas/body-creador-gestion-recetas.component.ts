import {Component, OnInit} from '@angular/core';
import {CreadorService} from "../../services/creador.service";

@Component({
  selector: 'app-body-creador-gestion-categorias',
  templateUrl: './body-creador-gestion-recetas.component.html',
  styleUrls: ['./body-creador-gestion-recetas.component.css']
})
export class BodyCreadorGestionRecetasComponent implements OnInit{
  cantidadRecetas = 0;

  constructor(private creadorService: CreadorService) {
  }

  ngOnInit() {
    this.obtenerCantidadRecetas();
  }

  obtenerCantidadRecetas() {
    this.creadorService.obtenerCantidadRecetasCreadas().subscribe(
      (response:any) => {
        this.cantidadRecetas = response;
        console.log(response);
      },
      error => {
        console.error('Error al obtener la cantidad de recetas:', error);
      }
    );
  }

}
