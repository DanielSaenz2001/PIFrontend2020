import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { AuthService } from 'src/app/guard/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token ;
  public form = {
    email: null,
    password: null
  };

  public google = {
    email: null,
  };
  email;
  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private route: ActivatedRoute
  ) { }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handleAuth(data.access_token);
    this.Jarwis.login2(this.form).subscribe(response =>{
      this.Token.handleComment(response);
      this.Jarwis.login3(this.form).subscribe(data2=>{
        this.Token.handleEg(data2);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/home');
      })
    })
  }
  handleResponse2(data) {
    this.Token.handleAuth(data);
    this.google.email=this.email;
    this.Jarwis.google2(this.google).subscribe(response=>{
      this.Token.handleComment(response);
     this.Jarwis.google3(this.google).subscribe(data2=>{
      this.Token.handleEg(data2);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/home');
     })
    })
  }
  handleError(error) {
    console.log("error")
    this.error = error.error.error;
  }
  ngOnInit() {
    this.parametro();
    if(this.token == undefined || this.token==null){
    }else{
      this.handleResponse2(this.token)
    }
  }
  parametro(){
    console.log("hola")
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email =params['ema'];
  });
  let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
  this.router.navigateByUrl(url);
  }
}
