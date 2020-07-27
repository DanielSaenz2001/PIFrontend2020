import { Component, OnInit } from '@angular/core';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { PaisesService } from 'src/app/servicios/PaisesService';
import { FacultadesService } from 'src/app/servicios/FacultadesService';

@Component({
  selector: 'app-validar-egresado',
  templateUrl: './validar-egresado.component.html',
  styleUrls: ['./validar-egresado.component.css']
})
export class ValidarEgresadoComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private EgresadoService:EgresadoService,
    private Validador: ValidadoresService, 
    private Token: TokenService,
    private paisesService: PaisesService,
    private FacultadesService: FacultadesService) { }

    EgresadoForm: FormGroup;
    EgresadoEscuelas: FormGroup;
    persona;
    PERSONA_ID;
    paises;
    departamentos;
    provincias;
    distritos;
    facultad;
    escuela;
    btnDisable;

  ngOnInit(): void {
    this.listar();
    this.pais();
    this.depar();
    this.provin();
    this.distri();
    this.facultades();
    this.escuel();
    this.EgresadoForm = this.formBuild.group({
      id:  [''],
      codigo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      pais_id: ['', [Validators.required]],
      departamento_id : ['', [Validators.required]],
      provincia_id :['', [Validators.required]],
      distrito_id  :['', [Validators.required]],
      ingreso  :['', [Validators.required]],
      egreso  :['', [Validators.required]],
      persona_id  :[]
    });
    this.EgresadoEscuelas = this.formBuild.group({
      id:  [''],
      egresado_id: [''],
      facultad_id: ['', [Validators.required]],
      escuela_id: ['', [Validators.required]]
    });
  }
  listar(){
    this.Validador.DatosPersona(this.Token.getAuth()).subscribe(response=>{
      if(response.validado == 0){
        this.PERSONA_ID=response.persona_ID;
        this.persona=response;
      }else{
        this.router.navigateByUrl('egresados/DatosEgresados');
      }
      
    })
  }
  guardar(){
    this.btnDisable=true;
    this.EgresadoForm.value.persona_id=this.PERSONA_ID;


    this.EgresadoService.add(this.EgresadoForm.value,this.Token.getEg()).subscribe(response=>{
      console.log(response)
      let idEgresado = response.id;
      this.EgresadoEscuelas.value.egresado_id=idEgresado;
      this.EgresadoService.EgresadoEscuela(this.EgresadoEscuelas.value,this.Token.getEg()).subscribe();
    })
    this.EgresadoService.updatePersonaEgresado(this.PERSONA_ID,1,this.Token.getEg()).subscribe();
    this.router.navigateByUrl('/egresados/DatosEgresados');
    
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
  facultades(){
    this.FacultadesService.facultades().subscribe(response => {
      this.facultad= response;
    });
  }
  escuel(){
    this.FacultadesService.escuelas().subscribe(response => {
      this.escuela= response;
    });
  }
}
