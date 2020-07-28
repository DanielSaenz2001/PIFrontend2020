import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidarExpService {

  endPoint ='https://megresado.herokuapp.com/api/validarexp'
  constructor(private http:HttpClient) { }


  public add(data,token): Observable<any> {
    return this.http.post(`${this.endPoint}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  public getById(id,token): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
}
