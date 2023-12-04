import { Component } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {

  public page!: number;

  recipes = [
    {
      title: 'Postres 1',
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
