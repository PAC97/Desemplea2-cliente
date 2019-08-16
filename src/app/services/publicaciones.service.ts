import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {Publicaciones} from '../models/Publicaciones'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http : HttpClient) { }
  getPublicaciones(): Observable<Publicaciones[]>{
    return this.http.get<Publicaciones[]>(`${this.API_URI}/publicaciones`);
  }

  getPublicacion(id: string): Observable<Publicaciones[]>{
    return this.http.get<Publicaciones[]>(`${this.API_URI}/publicaciones/${id}`);
  }

  addPublicacion(publicaciones : Publicaciones){
    return this.http.post(`${this.API_URI}/publicaciones`, publicaciones)
  }

  deletePublicacion (_id : string){
    return this.http.delete(`${this.API_URI}/publicaciones/${_id}`);
  }

  updatePublicacion(_id : string, publicaciones : Publicaciones){
    return this.http.put(`${this.API_URI}/publicaciones/${_id}`, publicaciones);
  }
}
