import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guard/AuthService';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { ValidadoresService } from 'src/app/servicios/validadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService,
    private ValidadoresService:ValidadoresService) { }


    public loggedIn: boolean;
    list;
    myFile;
    USERID;
    vali;
    rol;
  ngOnInit() {
    this.vali=null;
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.listar();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.removeAuth();
    this.Token.removeComment();
    this.Token.removeEg();
    this.Token.removeEgresado();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
  listar(){
    this.Jarwis.datos(this.Token.getAuth()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    this.list= data;
    console
    if(this.list.validado == false ){
      this.router.navigateByUrl('/ValidacionPersona');
    }else{
      this.ValidadoresService.RolUsuario(this.Token.getAuth()).subscribe(response=>{
        this.rol=response.ROLEID;
        console.log(this.rol)
        this.vali = this.list.validado;
      })
    }
    
  }
  handleError() {
    this.Token.removeAuth();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
  public error = null;

  userProfile(id){
    this.USERID = id;
  }
}
