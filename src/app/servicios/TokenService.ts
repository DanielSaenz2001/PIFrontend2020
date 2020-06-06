import { Injectable } from '@angular/core';
import { JarwisService } from './JarwisService';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://127.0.0.1:8000/api/login', //Laravel Authentification
    signup: 'http://127.0.0.1:8000/api/signup' //Laravel Authentification
  };
  rol: any;

  constructor(private Jarwis:JarwisService) { 
  }

  list;
  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {;
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
    
  }
}
