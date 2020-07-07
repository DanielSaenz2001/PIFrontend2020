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

  DatosUsuarios(user) {
    this.setUser(user);
  }

  DatosEgresados(egresados) {
    this.setEgresado(egresados);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  setUser(user) {
    localStorage.setItem('user', user);
  }

  setEgresado(egresado) {
    localStorage.setItem('egresado', egresado);
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getEgresados() {
    return localStorage.getItem('egresado');
  }
  get() {
    
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }
  removeEgresado() {
    localStorage.removeItem('egresado');
  }
  removeUsuario() {
    localStorage.removeItem('user');
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
    //token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjcwMjkyMiwiZXhwIjoxNTkyNzA2NTIyLCJuYmYiOjE1OTI3MDI5MjIsImp0aSI6Im5EMzk5dXYwSllRR3QxTWciLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.yu90nafdKbx2a0gPilFXOYwSf_T1Wb3tXFGXXFFoNvU"
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
