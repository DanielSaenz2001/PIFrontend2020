import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgresadoService {

  endPoint ='https://megresado.herokuapp.com/api/egresado'
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`);
  }

  public add(data,token): Observable<any> {
    return this.http.post(`${this.endPoint}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  public updateEgresado(id, data,token): Observable<any> {
      return this.http.put<any>(`${this.endPoint}Egresado/${id}`, data,{ headers:{
        'Authorization': "Bearer " + token,
        }
      });
  }

  public EgresadoEscuela(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}escuela`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public updatePersonaEgresado(id,data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Persona/${id}`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public EgresadoFiltro(data){
    return this.http.post(`${this.endPoint}Filtro`, data) ;
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  public getByIdEscuela(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}escuela/${id}`);
  }

  public getEgresadoCodigo(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}codigo`,data);
  }

  public EstadoEgresado(id,data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}estado/${id}`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public profesional(token): Observable<any> {
    return this.http.get<any>(`${this.endPoint}Profesional`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
}
