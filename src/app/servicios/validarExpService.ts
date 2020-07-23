import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidarExpService {

  endPoint ='http://127.0.0.1:8160/api/validarexp'
  constructor(private http:HttpClient) { }


  public add(data): Observable<any> {
    return this.http.post(`${this.endPoint}`, data);
  }

  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
}
