import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-header-explorador',
  templateUrl: './header-explorador.component.html',
  styleUrls: ['./header-explorador.component.css'],
  imports: [
    RouterModule,
  ],
  standalone: true,

})
export class HeaderExploradorComponent implements OnInit{
  public tipo: string ="";

  constructor(private router:Router, private sharedService:SharedService) {}

  ngOnInit() {
    this.tipo="vacio"
    this.sharedService.setTipo(this.tipo);
    console.log("tipo vacio: ",this.tipo)

  }

  llevarExplorador(){
    this.tipo="explorador"
    this.sharedService.setTipo(this.tipo);
    console.log("tipo explorador: ",this.tipo)
  }
}
