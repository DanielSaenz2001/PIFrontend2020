import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  endPoint ='http://127.0.0.1:8000/api/'
  constructor(private http:HttpClient) { }

  public DatosPersona(data): Observable<any>{
    return this.http.get<any>(`${this.endPoint}DatosPersona`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  public RolUsuario(data): Observable<any>{
    return this.http.get<any>(`${this.endPoint}RolUsuario`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  
}
