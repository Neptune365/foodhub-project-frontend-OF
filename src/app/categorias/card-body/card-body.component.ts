import { Component } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent {

  goBack() {
    window.history.back();
  }

  nombre: String="soy el nombre";
  descipciom: String="soy la descipcion";
  img: String="soy la imange";

}
