import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  endPoint ='https://megresado.herokuapp.com/api/experiencia'
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

  public update(id, data,token): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data,{ headers:{
        'Authorization': "Bearer " + token,
        }
      });
  }

  public delete(id,token): Observable<any> {
      return this.http.delete<any>(`${this.endPoint}/${id}`,{ headers:{
        'Authorization': "Bearer " + token,
        }
      });
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
}
