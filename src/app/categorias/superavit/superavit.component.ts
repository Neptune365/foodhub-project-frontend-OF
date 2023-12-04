import { Component } from '@angular/core';

@Component({
  selector: 'app-superavit',
  templateUrl: './superavit.component.html',
  styleUrls: ['./superavit.component.css']
})
export class SuperavitComponent {

  public page!: number;

  recipes = [
    {
      title: 'superavit 1',
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
