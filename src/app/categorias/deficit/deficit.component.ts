import { Component } from '@angular/core';

@Component({
  selector: 'app-deficit',
  templateUrl: './deficit.component.html',
  styleUrls: ['./deficit.component.css']
})
export class DeficitComponent {

  recipes = [
    {
      title: 'deficit 1',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      title: 'Desayuno 2',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
  ];

}
