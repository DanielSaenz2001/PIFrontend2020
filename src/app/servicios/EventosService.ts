import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  endPoint ='https://mfacultad.herokuapp.com/api/eventos'
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
      console.log(id)
      return this.http.delete<any>(`${this.endPoint}/${id}`,{ headers:{
        'Authorization': "Bearer " + token,
        }
      });
  }
  
  public EventosDispo(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}Dispo`);
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
}
