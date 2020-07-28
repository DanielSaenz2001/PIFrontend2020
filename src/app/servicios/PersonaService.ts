import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endPoint ='https://sheltered-scrubland-22795.herokuapp.com/api/persona' //LARAVEL Authenficaction
  constructor(private http:HttpClient) { }

  public getlist(token): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    })
  }
  public getById(id,token): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public add(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public addAministrador(data,token): Observable<any> {
    return this.http.post<any>(`${this.endPoint}administrador`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public updatePersona(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Persona/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  
}
