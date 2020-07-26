import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorEgresadoService {

  constructor(private http:HttpClient) { }

  endPoint ='http://127.0.0.1:8160/api/administradoregresado'

  public getEgresadoById(id,token): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  public addEgresadoAministrador(data,token): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/addEgresado`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public addEscuelaAministrador(data,token): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/addEscuela`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
}
