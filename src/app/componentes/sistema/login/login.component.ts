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
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }
  handleResponse2(data) {
    this.Token.handle(data);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
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
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
  });
  let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
  this.router.navigateByUrl(url);
  }
}
