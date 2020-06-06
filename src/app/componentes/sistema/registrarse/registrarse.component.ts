import { Component, OnInit, Input } from '@angular/core';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  @Input() personaID:string;
  @Input() email:string;
  
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    personaid: null
  };
  public error = {
    name:null,
    password:null
  };

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
  onSubmit() {
    console.log("submit :3 ")
    this.form.personaid= this.personaID;
    this.form.email= this.email;
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
   
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    location.reload();
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    console.log("Registrandose")
  }
}
