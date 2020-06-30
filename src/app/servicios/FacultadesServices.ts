import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  endPoint ='http://127.0.0.1:8080/api/' //LARAVEL MPaises
  constructor(private http:HttpClient) { }

  public facultades(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}facultades`)
  }
  public escuelas(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}escuelas`)
  }
  public egresaoescuela(data): Observable<any>{
    return this.http.post<any>(`${this.endPoint}egresaoescuela`,data)
  }
}
