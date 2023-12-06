import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {AuthDTO} from "../../models/AuthDTO";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-body-explorador-iniciar-sesion',
  templateUrl: './body-explorador-iniciar-sesion.component.html',
  styleUrls: ['./body-explorador-iniciar-sesion.component.css']
})
export class BodyExploradorIniciarSesionComponent implements OnInit{
  public tipo: string ="";
  authDTO: AuthDTO = {
    identificador: '',
    contrasenia: ''
  };

  errorRegistro: boolean = false;
  errorIdentificador: boolean = false;
  errorContrasenia: boolean = false;
  mensajeError: string = '';

  constructor(private authService: AuthService, private router:Router, private sharedService:SharedService) {}

  ngOnInit() {
    this.tipo="vacio"
    this.sharedService.setTipo(this.tipo);
  }

  iniciarSesion(): void {

    this.resetErrores();

    if (!this.authDTO.identificador || !this.authDTO.contrasenia) {
      this.errorRegistro = true;
      this.mensajeError = 'Complete todos los campos obligatorios.';
      return;
    }




    this.authService.iniciarSesion(this.authDTO).subscribe((response:any) => {
      this.tipo="creador"
      this.sharedService.setTipo(this.tipo);
      localStorage.setItem('token', response.token)
      this.router.navigate(['/ingresar']);
    }, error => {
      console.error('Error al iniciar sesión:', error);
      this.errorRegistro = true;
      this.mensajeError = 'Error al iniciar sesión. Inténtalo de nuevo';

    });

  }

  resetErrores(): void {
    this.errorRegistro = false;
    this.errorIdentificador = false;
    this.errorContrasenia = false;
    this.mensajeError = '';
  }

}
