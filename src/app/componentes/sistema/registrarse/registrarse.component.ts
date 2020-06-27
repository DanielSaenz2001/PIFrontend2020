import { Component, OnInit, Input } from '@angular/core';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  @Input() personaID:string;
  @Input() emailPE:string;

  public form = {
    email: null,
    //name: null,
    password: null,
    password_confirmation: null,
    validado:0,
    autorizado:0
  };

  Registro = new FormGroup({});  

  public error = {
    //name:null,
    email:null,
    password:null
  };

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private formBuilder:FormBuilder
  ) { }

  onSubmit() {
    console.log(this.Registro.value)
    this.Jarwis.signup(this.Registro.value).subscribe( 
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
    this.buildForm();

  }
  private buildForm(){
    this.Registro = this.formBuilder.group({
     
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[u]+[p]+[e]+[u]\.edu+\.pe$")]),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
      validado:new FormControl(0),
      autorizado:new FormControl(0)
    });
  }
}
