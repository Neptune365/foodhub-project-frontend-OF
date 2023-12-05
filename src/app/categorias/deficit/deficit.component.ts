import {Component, OnInit} from '@angular/core';
import {RecetaCategoriaDTO} from "../../models/RecetaCategoriaDTO";
import {Router} from "@angular/router";
import {RecetaService} from "../../services/receta.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-deficit',
  templateUrl: './deficit.component.html',
  styleUrls: ['./deficit.component.css']
})
export class DeficitComponent implements OnInit{
  public page!: number;
  public recipes: RecetaCategoriaDTO[] = [];

  constructor(private router: Router, private recetService: RecetaService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.obtenerRecetasPorCategoria('DEFICIT');
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



}
