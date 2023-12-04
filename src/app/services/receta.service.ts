import { Injectable } from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  url:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  crearReceta(recetaDTO: any): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.url}/explorar/crear`, recetaDTO, {headers});
  }

  mostrarRecetasPorCategoria(){}

  verReceta(){}
}
