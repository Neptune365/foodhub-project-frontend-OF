import { Component } from '@angular/core';
import {RecetaCategoriaDTO} from "../../models/RecetaCategoriaDTO";
import {Router} from "@angular/router";
import {RecetaService} from "../../services/receta.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent {
  public page!: number;
  public recipes: RecetaCategoriaDTO[] = [];

  constructor(private router: Router, private recetaService: RecetaService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.obtenerRecetasPorCategoria('DESAYUNO');
  }

  obtenerRecetasPorCategoria(categoria: string) {
    this.recetaService.mostrarRecetasPorCategoria(categoria).subscribe((recetas: RecetaCategoriaDTO[]) => {
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
  //     id: '01',
  //     title: 'Desayuno 1',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     id: '02',
  //     title: 'Desayuno 2',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     id: '01',
  //     title: 'Desayuno 1',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     id: '02',
  //     title: 'Desayuno 2',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },{
  //     id: '01',
  //     title: 'Desayuno 1',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     id: '02',
  //     title: 'Desayuno 2',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },{
  //     id: '01',
  //     title: 'Desayuno 1',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  //   {
  //     id: '02',
  //     title: 'Desayuno 2',
  //     image: './assets/images/receta1.jpg',
  //     description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
  //   },
  // ];
}
