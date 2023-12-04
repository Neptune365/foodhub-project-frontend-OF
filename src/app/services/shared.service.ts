import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private tipo: string ="";
  constructor() { }

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  getTipo(): string {
    return this.tipo;
  }

}
