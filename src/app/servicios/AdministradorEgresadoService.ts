import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorEgresadoService {

  constructor(private http:HttpClient) { }

  endPoint ='https://megresado.herokuapp.com/api/administradoregresado'

  public getEgresadoById(id,token): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  public addEgresadoAministrador(data,token): Observable<any> {
    return this.http.post<any>(`https://sheltered-scrubland-22795.herokuapp.com/api/addEgresado`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public addEscuelaAministrador(data,token): Observable<any> {
    return this.http.post<any>(`https://sheltered-scrubland-22795.herokuapp.com/api/addEscuela`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
}
