import {Component, OnInit} from '@angular/core';
import {RecetaCategoriaDTO} from "../../models/RecetaCategoriaDTO";
import {Router} from "@angular/router";
import {RecetaService} from "../../services/receta.service";

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit{
  public page!: number;
  public recipes: RecetaCategoriaDTO[] = [];

  constructor(private router: Router, private recetService: RecetaService) {
  }

  ngOnInit() {
    this.obtenerRecetasPorCategoria('POSTRES');
  }

  obtenerRecetasPorCategoria(categoria: string) {
    this.recetService.mostrarRecetasPorCategoria(categoria).subscribe((recetas: RecetaCategoriaDTO[]) => {
        this.recipes = recetas;
      }, (error) => {
        console.error('Error al obtener recetas por categoría:', error);
      }
    )
  }



  // recipes = [
  //   {
  //     title: 'Postres 1',
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
