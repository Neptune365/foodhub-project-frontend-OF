import { Component } from '@angular/core';

@Component({
  selector: 'app-almuerzo',
  templateUrl: './almuerzo.component.html',
  styleUrls: ['./almuerzo.component.css']
})
export class AlmuerzoComponent {

  public page!: number;

  recipes = [
    {
      title: 'Almuerzo 1',
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
