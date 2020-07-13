import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  endPoint ='http://127.0.0.1:8080/api/eventos'
  constructor(private http:HttpClient) { }

  public getlist(data): Observable<any>{
    console.log(data);
    return this.http.get<any>(`${this.endPoint}`,{ headers:{
      'id':  data,
      }
    });
  }

  public add(data): Observable<any> {


    return this.http.post(`${this.endPoint}`, data);
  }

  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }

  public delete(id): Observable<any> {
      console.log(id)
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
  
  public EventosDispo(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}Dispo`);
  }
  public getById(id): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
}
