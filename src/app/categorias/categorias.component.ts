import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  title = 'categorias';

  public tipo: string ="";
  public header:number =0;

  constructor(private router:Router, private sharedService:SharedService) {}

  ngOnInit() {
    this.tipo=this.sharedService.getTipo();
    console.log("tipo de muestra: ",this.tipo)
    if (this.tipo==="creador"){
      this.header=2;
    } else {
      this.header=1;
    }
  }
}
