import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgresadoService {

  endPoint ='http://127.0.0.1:8320/api/egresado'
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`);
  }

  public add(data): Observable<any> {
    return this.http.post(`${this.endPoint}`, data);
  }

  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }

  public delete(id): Observable<any> {
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
  public EgresadoEscuela(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}escuela`, data);
  }
  public updatePersonaEgresado(id,data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Persona/${id}`,data);
  }
  public EgresadoFiltro(data){
    return this.http.post(`${this.endPoint}Filtro`, data) ;
  }
}
