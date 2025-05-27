import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss'],
})
export class PedidoListComponent {
  pedidos: Pedido[] = [];
  produto: any;

  constructor(private dadosService: DadosService) {
    this.pedidos = this.dadosService.getPedidos();
  }

  total(pedido: Pedido): number {
    return pedido.calcularTotal();
  }

  get quantidadePedidos(): number {
    return this.pedidos.length;
  }
}
