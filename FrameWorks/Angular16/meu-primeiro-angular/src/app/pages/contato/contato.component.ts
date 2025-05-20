import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  idade: number|null = null;
  profissao: string = '';

  limparDados() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.idade = null;
    this.profissao = '';    
  }

    validarDados() {
    // Nome >= 3 caracteres
    if (this.nome.length < 3) {
      alert('Nome deve ter pelo menos 3 caracteres.');
    } else {this.nome = ''}
    // Email deve conter '@'
    if (!this.email.includes('@')) {
      alert('Email inválido.');
    }
    if (this.idade !== null && this.idade < 18){
      alert('Idade deve ser maior ou igual a 18 anos.');
    }
    // Telefone = somente numeros
    if (this.profissao === '') {
      alert('Profissão não pode ser vazia.');
    } else {
      alert('Dados válidos!');
    }
    return true;
  }
}
