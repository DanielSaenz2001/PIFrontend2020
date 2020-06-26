import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guard/AuthService';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService) { }


    public loggedIn: boolean;
    list;
    myFile;
    USERID;
    vali;
  ngOnInit() {
    this.vali=null;
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.listar();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
  listar(){
    this.Jarwis.datos(this.Token.get()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    console.log("hola")
    this.list= data;
    console.log(this.list.validado)
    if(this.list.validado == 0){
      this.router.navigateByUrl('/ValidacionPersona');
    }else{
      this.vali = this.list.validado;
    }
    
  }
  handleError() {
    console.log("hola")
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
  public error = null;
  filedata:any;
  fileEvent(e){
        this.filedata = e.target.files[0];
  }
  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    myFormData.append('id', this.USERID);
    myFormData.append('image', this.filedata);
    this.Jarwis.profile(myFormData);
    this.listar();
  } 
  userProfile(id){
    this.USERID = id;
  }

}
