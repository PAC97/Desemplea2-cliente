import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/Servicios';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http : HttpClient) { }
  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.API_URI}/servicio`);
  }

  getServicio(id: string): Observable<Servicio>{
    return this.http.get<Servicio>(`${this.API_URI}/servicio/${id}`);
  }

  addServicio(servicio : Servicio){
    return this.http.post(`${this.API_URI}/servicio`, servicio)
  }

  deleteServicio (_id : string){
    return this.http.delete(`${this.API_URI}/servicio/${_id}`);
  }

  updateServicio(_id : string, servicio : Servicio){
    return this.http.put(`${this.API_URI}/servicio/${_id}`, servicio);
  }
}
