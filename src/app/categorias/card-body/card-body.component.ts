import {Component, OnInit} from '@angular/core';
import {RecetaService} from "../../services/receta.service";
import {RecetaDTO} from "../../models/RecetaDTO";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {
  recetaDTO: RecetaDTO | undefined;

  constructor(private recetaService: RecetaService, private route: ActivatedRoute, private sharedService:SharedService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idReceta = this.sharedService.getrecetaAlmacenada();
      this.recetaService.verReceta(idReceta).subscribe((receta: RecetaDTO) => {
          this.recetaDTO = receta;
        },
        (error) =>{
          console.error('Error al obtener la receta:', error);
        }
      );
    });
  }

  goBack() {
    window.history.back();
  }

}
