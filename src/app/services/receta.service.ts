import { Injectable } from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecetaDTO} from "../models/RecetaDTO";
import {RecetaCategoriaDTO} from "../models/RecetaCategoriaDTO";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  url:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  crearReceta(recetaDTO: RecetaDTO): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.url}/explorar/crear`, recetaDTO, { headers });
  }

  mostrarRecetasPorCategoria(categoria: string): Observable<RecetaCategoriaDTO[]>{
    return this.http.get<RecetaCategoriaDTO[]>(`${this.url}/explorar/recetas?categoria=${categoria}`);
  }

  verReceta(){}
}
