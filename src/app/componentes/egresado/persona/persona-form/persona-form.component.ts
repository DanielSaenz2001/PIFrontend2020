import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { PersonaService } from 'src/app/servicios/PersonaService';
import { PaisesService } from 'src/app/servicios/PaisesService';
import { AuthService } from 'src/app/guard/AuthService';
@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {


  personaForm: FormGroup;

  constructor( private route: ActivatedRoute,
    private personaServices: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private paisesService:PaisesService,
    private Jarwis: JarwisService, private Token:TokenService,
    private Auth: AuthService) { 
      //let id =this.route.snapshot.paramMap.get('id')
      //this.personaServices.getById(id,this.Token.getAuth()).subscribe();
      
    }
    btnDisable;
    editar = false;
    paises;
    departamentos;
    usuarios;
    provincias;
    IDPersona;
    list;
    IDUSER;
    vali;
    Email;
    distritos;
  ngOnInit() {
    this.listar();
    this.pais();
    this.depar();
    this.provin();
    this.distri();
      this.personaForm = this.formBuilder.group({
        id:  [''],
        nombre: ['', [Validators.required]],
        ap_paterno: ['', [Validators.required]],
        ap_materno: ['', [Validators.required]],
        dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
        pais: ['', [Validators.required]],
        departamento: ['', [Validators.required]],
        provincia: ['', [Validators.required]],
        distrito: ['', [Validators.required]],
        email: this.Email,
        fec_nacimiento: ['', [Validators.required]],
        est_civil: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        dependiente:null,
        user_id:[''],
      });
  }

  pais(){
    this.paisesService.paises().subscribe(response => {
      this.paises= response;
    });
  }
  depar(){
    this.paisesService.departamentos().subscribe(response => {
      this.departamentos= response;
    });
  }
  provin(){
    this.paisesService.provincias().subscribe(response => {
      this.provincias= response;
    });
  }
  distri(){
    this.paisesService.distritos().subscribe(response => {
      this.distritos= response;
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.removeAuth();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  save(){
      this.personaForm.value.email=this.Email;
      this.personaForm.value.user_id=this.IDUSER;

      console.log(this.personaForm.value)
      this.btnDisable=true;
      this.personaServices.add(this.personaForm.value,this.Token.getAuth()).subscribe(response => {
        this.IDPersona= response.id; 
        this.router.navigateByUrl('/');
      });
      
     
  }



  listar(){
    this.Jarwis.datos(this.Token.getAuth()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }

  handleResponse(data) {
    this.IDUSER =data.id
    this.Email =data.email
    this.vali =data.validado
    console.log(data)
    if(this.vali !== false){
      this.router.navigateByUrl('/home');
    }
  }

  handleError() {
    this.Token.removeAuth();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
}
