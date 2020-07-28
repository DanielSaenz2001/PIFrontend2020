import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  endPoint ='https://sheltered-scrubland-22795.herokuapp.com/api/'
  constructor(private http:HttpClient) { }

  usuarios(){
    return this.http.get(`${this.endPoint}usuarios`) ;
  }
  usuariosFiltro(data){
    return this.http.post(`${this.endPoint}usuariosFiltro`, data) ;
  }
  getById(id){
    return this.http.get<any>(`${this.endPoint}usuarios/${id}`);
  }
  getRolesById(id){
    return this.http.get<any>(`${this.endPoint}roles/${id}`);
  }
  getUserAutorizadoById(id){
    return this.http.get<any>(`${this.endPoint}autorizadousuario/${id}`);
  }

  public actualizarRolUsuario(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}actualizarRolUsuario/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }
  public actualizarAutorizacionUsuario(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.endPoint}actualizarAutorizacionUsuario/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

}

