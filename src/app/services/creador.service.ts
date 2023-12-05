import { Injectable } from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

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

  verPerfil(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.url}/creador/perfil`, { headers });
  }

}
