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

  constructor(private authService: AuthService, private router:Router, private sharedService:SharedService) {}

  ngOnInit() {
    this.tipo="vacio"
    this.sharedService.setTipo(this.tipo);
  }

  iniciarSesion(): void {

    this.authService.iniciarSesion(this.authDTO).subscribe((response:any) => {
      this.tipo="creador"
      this.sharedService.setTipo(this.tipo);
      localStorage.setItem('token', response.token)
      this.router.navigate(['/ingresar']);
    }, error => {
      console.error('Error al iniciar sesión:', error);
    });
  }
}
