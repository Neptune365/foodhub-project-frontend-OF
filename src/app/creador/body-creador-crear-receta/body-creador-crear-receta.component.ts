import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-body-creador-crear-receta',
  templateUrl: './body-creador-crear-receta.component.html',
  styleUrls: ['./body-creador-crear-receta.component.css']
})
export class BodyCreadorCrearRecetaComponent {

  ingredientes: { id: number, nombre: string }[] = [{ id: 1, nombre: '' }];
  pasos: { id: number, descripcion: string }[] = [{ id: 1, descripcion: '' }];

  agregarIngrediente() {
    const nuevoId = this.ingredientes.length + 1;
    this.ingredientes.push({ id: nuevoId, nombre: '' });
  }

  eliminarIngrediente(id: number) {
    if (this.ingredientes.length > 1) {
      const index = this.ingredientes.findIndex(ingrediente => ingrediente.id === id);
      this.ingredientes.splice(index, 1);
    }
  }

  agregarPaso() {
    const nuevoId = this.pasos.length + 1;
    this.pasos.push({ id: nuevoId, descripcion: '' });
  }

  eliminarPaso(id: number) {
    if (this.pasos.length > 1) {
      const index = this.pasos.findIndex(paso => paso.id === id);
      this.pasos.splice(index, 1);
    }
  }




  mostrarModalPublicado: boolean = false;

  constructor(private router:Router) {
  }

  validarCamposYPublicar() {
    // Lógica de validación de campos y creación de cuenta
    const exito = this.validarYCrearCuenta();

    if (exito) {
      this.mostrarModalPublicado = true;
    }
  }

  cerrarModalPublicado() {
    this.mostrarModalPublicado = false;
    this.router.navigate(['/ingresar/gestionDeRecetas'])

  }

  private validarYCrearCuenta(): boolean {
    // Lógica de validación y creación de cuenta
    // Devuelve true si la cuenta se crea exitosamente, de lo contrario false.
    return true;
  }



}
