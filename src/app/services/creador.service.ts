import { Injectable } from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {FotoPerfilDTO} from "../models/FotoPerfilDTO";

@Injectable({
  providedIn: 'root'
})
export class CreadorService {
  url:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  obtenerCantidadRecetasCreadas(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.url}/creador/cantidadRecetas`, { headers });
  }

  // POR DESARROLLAR
  modificarPerfil(fotoPerfil: File): Observable<FotoPerfilDTO> {
    const token = localStorage.getItem('token');
    const formData: FormData = new FormData();
    formData.append('file', fotoPerfil);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch<FotoPerfilDTO>(`${this.url}/creador/perfil`, formData, { headers });
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.url}/files`);
  }
  //

  obtenerDatosDeCreador(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.url}/creador/datos`, { headers });
  }

}
