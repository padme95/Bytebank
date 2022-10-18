export interface Transferencia {
  id?: number | string;
  valor: number | string;
  destino: number | string;
  data_hora?: Date | string;
}
