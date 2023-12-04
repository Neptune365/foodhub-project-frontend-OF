import { Component } from '@angular/core';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent {

  public page!: number;

  recipes = [
    {
      id: '01',
      title: 'Desayuno 1',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      id: '02',
      title: 'Desayuno 2',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      id: '01',
      title: 'Desayuno 1',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      id: '02',
      title: 'Desayuno 2',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },{
      id: '01',
      title: 'Desayuno 1',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      id: '02',
      title: 'Desayuno 2',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },{
      id: '01',
      title: 'Desayuno 1',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
    {
      id: '02',
      title: 'Desayuno 2',
      image: './assets/images/receta1.jpg',
      description: 'Aprende a preparar este rico desayuno con tres simples ingredientes. Con estos sencillos pasos podrás disfrutar de este rico y nutritivo platillo'
    },
  ];
}
