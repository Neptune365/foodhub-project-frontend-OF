import {Component, OnInit} from '@angular/core';
import {CreadorService} from "../../services/creador.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {data} from "autoprefixer";
import {CreadorDTO} from "../../models/CreadorDTO";
import {FotoPerfilDTO} from "../../models/FotoPerfilDTO";

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

  fotoPerfilDTO: FotoPerfilDTO = {
    fotoPerfil: '',
  }

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  defaultImage: string = './assets/images/default-profile-image.jpg';
  preview = this.defaultImage;

  imageInfos?: Observable<any>;
  constructor(private creadorService: CreadorService) {
  }

  ngOnInit(): void {
    this.imageInfos = this.creadorService.getFiles();
    this.obtenerDatosCreador();
  }

  obtenerDatosCreador(): void {
    this.creadorService.obtenerDatosDeCreador().subscribe(
      (datos: CreadorDTO) => {
        this.creadorDTO = datos;
      },
      error => {
        console.error('Error al obtener datos del creador:', error);
        // Manejo de errores
      }
    );
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
          this.creadorDTO = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.creadorService.modificarPerfil(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.creadorService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }

      this.selectedFiles = undefined;
    }
  }

  protected readonly data = data;
}
