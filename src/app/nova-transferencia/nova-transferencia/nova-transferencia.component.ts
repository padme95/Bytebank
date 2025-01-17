
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  public transferir(){
    console.log('Transferência Solicitada');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

      this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos;
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
      );
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
