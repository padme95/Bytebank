import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }


get transferencias() {
  return this.listaTransferencia;
}

public todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(`${this.url}/transferencias`);
}

public adicionar(transferencia: Transferencia): Observable<Transferencia> {
  this.hidratar(transferencia);

  return this.httpClient.post<Transferencia>(`${this.url}/transferencias`, transferencia);

}

private hidratar(transferencia: Transferencia) {
  transferencia.data_hora = new Date();
}

}

