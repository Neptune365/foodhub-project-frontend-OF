import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RecetaService} from "../../services/receta.service";
import {Categoria} from "../../models/categoria";
import {IngredienteDTO, InstruccionDTO, RecetaDTO} from "../../models/RecetaDTO";

@Component({
  selector: 'app-body-creador-crear-receta',
  templateUrl: './body-creador-crear-receta.component.html',
  styleUrls: ['./body-creador-crear-receta.component.css']
})
export class BodyCreadorCrearRecetaComponent {
  titulo: string = '';
  descripcion: string = '';
  tiempoCoccion: number = 0;
  porciones: number = 0;
  calorias: number = 0;
  categoria: Categoria; // Valor por defecto
  imagen: string = '';

  ingredientes: IngredienteDTO[] = [{ ingrediente: '' }];
  instrucciones: InstruccionDTO[] = [{ instruccion: '' }];
  mostrarModalPublicado: boolean = false;

  selectedFile: File | null = null;
  base64Data: string | null = null;

  constructor(private router: Router, private recetaService: RecetaService) {
    this.categoria = Categoria.NINGUNO; // O cualquier valor por defecto que prefieras
  }

  errorRegistro: boolean = false;

  validarCamposYPublicar() {
    const nuevaReceta: RecetaDTO = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      tiempoCoccion: this.tiempoCoccion,
      porciones: this.porciones,
      calorias: this.calorias,
      categoria: this.categoria,
      ingredientes: this.ingredientes,
      instrucciones: this.instrucciones,
      imagen: this.imagen,
    };

    this.recetaService.crearReceta(nuevaReceta).subscribe((response:any) => {
        console.log(response)
        this.mostrarModalPublicado = true;
        const exito = this.validarYCrearCuenta(); // Lógica de validación de campos y creación de cuenta
        if (exito) {
          this.mostrarModalPublicado = true;
          this.errorRegistro = false;
        }
      },
      (error) => {
        console.error('Error al crear la receta:', error);
        this.errorRegistro = true;
      }
    );

  }

  agregarIngrediente() {
    this.ingredientes.push({ ingrediente: '' });
  }

  eliminarIngrediente(index: number) {
    if (this.ingredientes.length > 1) {
      this.ingredientes.splice(index, 1);
    }
  }

  agregarPaso() {
    this.instrucciones.push({ instruccion: '' });
  }

  eliminarPaso(index: number) {
    if (this.instrucciones.length > 1) {
      this.instrucciones.splice(index, 1);
    }
  }

  cerrarModalPublicado() {
    this.mostrarModalPublicado = false;
    this.router.navigate(['/ingresar/gestionDeRecetas'])

  }

  private validarYCrearCuenta(): boolean {
    return true; // Lógica de validación y creación de cuenta
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  convertToBase64() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.imagen = reader.result as string;
        this.validarCamposYPublicar(); // Llamar a la función después de obtener la imagen en Base64
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  }

}
