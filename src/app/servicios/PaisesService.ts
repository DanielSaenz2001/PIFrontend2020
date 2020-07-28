import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  endPoint ='https://mfacultad.herokuapp.com/api/' //LARAVEL MPaises
  constructor(private http:HttpClient) { }

  public paises(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}paises`)
  }
  public departamentos(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}departamentos`)
  }
  public provincias(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}provincias`)
  }
  public distritos(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}distritos`)
  }
}
