import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { PersonaService } from 'src/app/servicios/PersonaService';
import { PaisesService } from 'src/app/servicios/PaisesService';
import { DepartamentoService } from 'src/app/servicios/DepartamentoService';
import { ProvinciaService } from 'src/app/servicios/ProvinciaService';
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
    private departamentosService:DepartamentoService,
    private provinciasService:ProvinciaService,
    private Jarwis: JarwisService, private Token:TokenService,
    private Auth: AuthService) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe();
      
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
  ngOnInit() {
    this.listar();
    this.pais();
    this.depar();
    this.provin();
      this.personaForm = this.formBuilder.group({
        id:  [''],
        nombre: ['', [Validators.required]],
        ap_paterno: ['', [Validators.required]],
        ap_materno: ['', [Validators.required]],
        dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
        pais: ['', [Validators.required]],
        departamento: ['', [Validators.required]],
        provincia: ['', [Validators.required]],
        email: this.Email,
        fec_nacimiento: ['', [Validators.required]],
        est_civil: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        dependiente:null
      });
  }

  pais(){
    this.paisesService.getlist().subscribe(response => {
      this.paises= response;
    });
  }
  depar(){
    this.departamentosService.getlist().subscribe(response => {
      this.departamentos= response;
    });
  }
  provin(){
    this.provinciasService.getlist().subscribe(response => {
      this.provincias= response;
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  save(){
    this.personaForm.value.email=this.Email;
      this.personaServices.add(this.personaForm.value).subscribe(response => {
        this.IDPersona= response.id;
        this.validarpersona(this.IDPersona,this.Token.get(),this.IDUSER)
        this.btnDisable=true;
        this.router.navigateByUrl('/');
      });
      
     
  }

  validarpersona(personaid,token,idusuario){
    this.Jarwis.validar(idusuario, personaid
      ,token
      ).subscribe(response => {
        console.log(response)
      });
  }
  listar(){
    this.Jarwis.datos(this.Token.get()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    this.IDUSER =data.id
    this.Email =data.email
    this.vali =data.personaid
    if(data.personaid !== null){
      this.router.navigateByUrl('/home');
    }
  }
  handleError() {
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
}