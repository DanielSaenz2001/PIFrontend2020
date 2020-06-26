import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  endPoint ='http://127.0.0.1:8160/api/Comentarios'
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`);
  }
  public getlistComentariosNoRespuesta(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}NoRespuesta`);
  }
  
  public add(data): Observable<any> {
    return this.http.post(`${this.endPoint}`, data);
  }

  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public ComentariosUpdateRespuesta(id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}UpdateRespuesta/${id}`, data);
}
 
  public delete(id): Observable<any> {
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }

  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }

  public getByIdRespuesta(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}Respuesta/${id}`);
  }
}
