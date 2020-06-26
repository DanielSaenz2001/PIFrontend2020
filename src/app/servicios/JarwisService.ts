import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://127.0.0.1:8000/api'; //Laravel Autentification

  constructor(private http: HttpClient) { }
  
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  usuarios(){
    return this.http.get(`http://127.0.0.1:8240/api/usuarios`) ;
  }
  usuariosFiltro(data){
    return this.http.post(`http://127.0.0.1:8240/api/usuariosFiltro`, data) ;
  }
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
  
  me(data) {
    return this.http.get(`${this.baseUrl}/usuario`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  datos(data) {
    return this.http.get(`${this.baseUrl}/me2`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  validar(id, data,token): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/userupdate/${id}`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    });
  }

  users(data) {
    return this.http.get(`${this.baseUrl}/users`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }

  profile(data){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(data)
    this.http.post(`${this.baseUrl}/image`, data, {headers: headers}).subscribe(response=>{
      console.log(response)
    })
  }


}
