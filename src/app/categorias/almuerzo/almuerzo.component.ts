import {Component, OnInit} from '@angular/core';
import { RecetaCategoriaDTO } from "../../models/RecetaCategoriaDTO";
import {Router} from "@angular/router";
import {RecetaService} from "../../services/receta.service";
import {RecetaDTO} from "../../models/RecetaDTO";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-almuerzo',
  templateUrl: './almuerzo.component.html',
  styleUrls: ['./almuerzo.component.css']
})
export class AlmuerzoComponent implements OnInit {
  public page!: number;
  public recipes: RecetaCategoriaDTO[] = [];

  constructor(private router: Router, private recetService: RecetaService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.obtenerRecetasPorCategoria('ALMUERZO');
  }

  obtenerRecetasPorCategoria(categoria: string) {
    this.recetService.mostrarRecetasPorCategoria(categoria).subscribe((recetas: RecetaCategoriaDTO[]) => {
      this.recipes = recetas;
    }, (error) => {
        console.error('Error al obtener recetas por categoría:', error);
      }
    )
  }

  verContenido(recipe:RecetaCategoriaDTO) {
    this.sharedService.setrecetaAlmacenada(recipe.id);
    this.router.navigate(['/cardBody/' + recipe.id])
    console.log(recipe.id);
  }

  // recipes = [
  //   {
  //     title: 'Almuerzo 1',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     title: 'Desayuno 2',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  // ];

}
