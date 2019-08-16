import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoUsuario } from '../models/TipoUsuario';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http : HttpClient) { }
  getTipoUsuarioList():Observable<TipoUsuario[]>{
    return this.http.get<TipoUsuario[]>(`${this.API_URI}/tipoUsuario`);
  }
  getTipoUsuario(id: string): Observable<TipoUsuario>{
    return this.http.get<TipoUsuario>(`${this.API_URI}/tipoUsuario/${id}`);
  }

  addTipoUsuario(tipoUsuario : TipoUsuario){
    return this.http.post(`${this.API_URI}/tipoUsuario`, tipoUsuario)
  }

  deleteTipoUsuario (_id : string){
    return this.http.delete(`${this.API_URI}/tipoUsuario/${_id}`);
  }

  updateTipoUsuario(_id : string, tipoUsuario : TipoUsuario){
    return this.http.put(`${this.API_URI}/tipoUsuario/${_id}`, tipoUsuario);
  }
}
