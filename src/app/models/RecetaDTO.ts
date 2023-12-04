import {Categoria} from "./categoria";

export interface IngredienteDTO {
  // idIngrediente: number;
  ingrediente: string;
}

export interface InstruccionDTO {
  // idInstruccion: number;
  instruccion: string;
}

export interface RecetaDTO {
  titulo: string;
  descripcion: string;
  tiempoCoccion: number;
  porciones: number;
  calorias: number;
  // imagen: string;
  categoria: Categoria;
  ingredientes: IngredienteDTO[];
  instrucciones: InstruccionDTO[];
}
