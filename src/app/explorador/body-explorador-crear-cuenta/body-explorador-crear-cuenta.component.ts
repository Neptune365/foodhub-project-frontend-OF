import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CreadorDTO} from "../../models/CreadorDTO";

@Component({
  selector: 'app-body-explorador-crear-cuenta',
  templateUrl: './body-explorador-crear-cuenta.component.html',
  styleUrls: ['./body-explorador-crear-cuenta.component.css']
})
export class BodyExploradorCrearCuentaComponent {
  mostrarModalCuentaCreada: boolean = false;
  creadorDTO: CreadorDTO = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    contrasenia: '',
    codigoColegiatura: ''
  };

  errorRegistro: boolean = false;
  cargando: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  registrarCreador(): void {
    this.cargando = true;
    this.authService.registrarCreador(this.creadorDTO).subscribe((response) => {
      console.log('Respuesta del servidor:', response);

      const exito = this.validarYCrearCuenta();
      if (exito) {
        this.mostrarModalCuentaCreada = true;
      }
      this.cargando = false;

    }, error => {
      console.error('Error al registrar:', error);
      this.errorRegistro = true;
      this.cargando = false;
    });
  }

  // validarCamposYCrearCuenta() {
  //   // Lógica de validación de campos y creación de cuenta
  //
  // }

  cerrarModalCuentaCreada() {
    this.mostrarModalCuentaCreada = false;
    this.router.navigate(['/iniciarSesion'])

  }

  private validarYCrearCuenta(): boolean {
    // Lógica de validación y creación de cuenta
    // Devuelve true si la cuenta se crea exitosamente, de lo contrario false.
    return true;
  }

}
