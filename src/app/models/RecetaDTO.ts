import {Categoria} from "./categoria";

export interface IngredienteDTO {
  ingrediente: string;
}

export interface InstruccionDTO {
  instruccion: string;
}

export interface RecetaDTO {
  id?:number;
  titulo: string;
  descripcion: string;
  tiempoCoccion: number;
  porciones: number;
  calorias: number;
  imagen: string;
  categoria: Categoria;
  ingredientes: IngredienteDTO[];
  instrucciones: InstruccionDTO[];
}
