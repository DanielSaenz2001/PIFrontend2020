import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  endPoint ='https://sheltered-scrubland-22795.herokuapp.com/api/'
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
  public personaEgresado(data): Observable<any>{
    return this.http.get<any>(`${this.endPoint}personaEgresado`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  public egresadoPostgrado(data): Observable<any>{
    return this.http.get<any>(`${this.endPoint}egresadoPostgrado`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
}
