import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }
  // Mostra os clientes
  getClientes(): Cliente[] {
    return this.clientes;
  }
  // Para adicionar clientes na lista
  adicionarClientes(cliente:Cliente): void {
    this.clientes.push(cliente);
  }
  // Mostra os produtos
  getProdutos(): Produto[] {
    return this.produtos;
  }
  // Para adicionar produtos na lista
  adicionarProdutos(produto:Produto): void {
    this.produtos.push(produto);
  }
  // Mostra os pedidos
  getPedidos(): Pedido[] {
    return this.pedidos;
  }
  // Para adicionar pedidos na lista
  adicionarPedido(pedido:Pedido): void {
    this.pedidos.push(pedido);
  }
}
