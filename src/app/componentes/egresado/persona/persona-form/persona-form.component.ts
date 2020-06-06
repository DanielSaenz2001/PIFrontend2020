import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { PersonaService } from 'src/app/servicios/PersonaService';
import { PaisesService } from 'src/app/servicios/PaisesService';
import { DepartamentoService } from 'src/app/servicios/DepartamentoService';
import { ProvinciaService } from 'src/app/servicios/ProvinciaService';
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
    private Jarwis: JarwisService, private token:TokenService) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe();
      
    }
    editar = false;
    paises;
    departamentos;
    usuarios;
    provincias;
    IDS;
  ngOnInit() {
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
        email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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

  save(){
    let id = this.route.snapshot.paramMap.get('id')
   if(id != null){
      this.personaServices.update(id, this.personaForm.value).subscribe(response => {
        console.log(response)
      });;
      this.router.navigateByUrl('/profile');
    }else{
      this.personaServices.add(this.personaForm.value).subscribe(response => {

        this.IDS= response.id;
      });
    }
  }
  usuario(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.usuarios= response[0].persona_ID
    });
  }

}
