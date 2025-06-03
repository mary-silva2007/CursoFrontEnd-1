import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3001/vagas" // endereço da api
  constructor(private http: HttpClient) { }

  // criar métodos para a conexão com a apiREST

  //get - obter a lista de vagas
  getVagas():Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl)
  }

  //post

  //put

  //delete
}
