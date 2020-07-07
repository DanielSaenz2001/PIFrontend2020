import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorEgresadoService {

  constructor(private http:HttpClient) { }

  endPoint ='http://127.0.0.1:8320/api/administradoregresado'

  public getEgresadoById(id,data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`,data);
  }
}
