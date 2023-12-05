import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CreadorService} from "../../services/creador.service";
import {CreadorDTO} from "../../models/CreadorDTO";

@Component({
  selector: 'app-body-creador-mi-perfil',
  templateUrl: './body-creador-mi-perfil.component.html',
  styleUrls: ['./body-creador-mi-perfil.component.css']
})
export class BodyCreadorMiPerfilComponent implements OnInit {
  creadorDTO: CreadorDTO = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    contrasenia: '',
    codigoColegiatura: '',
  };

  defaultImage: string = './assets/images/default-profile-image.jpg';
  preview: string | ArrayBuffer | null = this.defaultImage;

  constructor(private creadorService: CreadorService) {}

  ngOnInit(): void {
    this.obtenerDatosCreador();
  }

  obtenerDatosCreador(): void {
    this.creadorService.verPerfil().subscribe(
      (datos: CreadorDTO) => {
        this.creadorDTO = datos;
      },
      error => {
        console.error('Error al obtener datos del creador:', error);
      }
    );
  }
}
