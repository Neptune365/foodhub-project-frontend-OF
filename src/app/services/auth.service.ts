import { Injectable } from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthDTO} from "../models/AuthDTO";
import {CreadorDTO} from "../models/CreadorDTO";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  registrarCreador(creadorData: CreadorDTO): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string>(`${this.url}/auth/registrar`, creadorData, { headers });
  }

  iniciarSesion(authData: AuthDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.url}/auth/login`, authData, { headers });
  }

}
