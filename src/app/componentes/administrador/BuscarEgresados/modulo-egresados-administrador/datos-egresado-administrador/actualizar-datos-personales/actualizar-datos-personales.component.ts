import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from 'src/app/servicios/PaisesService';
import { FacultadesService } from 'src/app/servicios/FacultadesService';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { PersonaService } from 'src/app/servicios/PersonaService';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';

@Component({
  selector: 'app-actualizar-datos-personales-administrador',
  templateUrl: './actualizar-datos-personales.component.html',
  styleUrls: ['./actualizar-datos-personales.component.css']
})
export class ActualizarDatosPersonalesAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private paisesService: PaisesService,
    private FacultadesService: FacultadesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private EgresadoService:EgresadoService,
    private personasService: PersonaService,
    private AdministradorEgresadoService:AdministradorEgresadoService) { }


    EgresadoForm: FormGroup;
    EgresadoEscuelas: FormGroup;
    PersonaForm: FormGroup;
    persona;
    PERSONA_ID;
    paises;
    departamentos;
    provincias;
    distritos;
    facultad;
    escuela;
    btnDisable;
    ListPersona;
    ListEscuelas;
    ListEgresado;

    public form={
      idusuario:''
    }
  ngOnInit(): void {
    this.listar();
    this.pais();
    this.depar();
    this.provin();
    this.distri();
    this.facultades();
    this.escuel();
    this.formularios();
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.EgresadoService.getById(id).subscribe(response => {
      this.EgresadoForm.setValue(response);
    });

    console.log(this.token.getEgresados())
  }
  listar(){
 
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
      console.log(response)
      if(response.persona.validado == 1){
        this.ListPersona= response.persona;
        this.ListEscuelas= response.escuela;
        this.ListEgresado= response.egresado;
        
        this.EgresadoService.getByIdEscuela(this.ListEscuelas.Egresado_Escuela_id).subscribe(response => {
          response.facultad_id=this.ListEscuelas.facultad_id;
          this.EgresadoEscuelas.setValue(response);
        });

        this.personasService.getById(this.ListPersona.Persona_id,this.token.getAuth()).subscribe(response => {
          this.PersonaForm.setValue(response);
        });

      }else{
        this.router.navigateByUrl('/administrador/egresado/'+this.token.getEgresados()+'/DatosEgresados');
        
      }
    })
  }
  guardar(){
    this.btnDisable=true;

    console.log(this.EgresadoForm.value)
    console.log(this.PersonaForm.value)
    this.EgresadoService.updateEgresado(this.EgresadoForm.value.id,this.EgresadoForm.value,this.token.getEg()).subscribe(response=>{
      this.router.navigateByUrl('/administrador/egresado/'+this.token.getEgresados()+'/DatosEgresados');
    });
    this.personasService.updatePersona(this.PersonaForm.value.id,this.PersonaForm.value,this.token.getAuth()).subscribe(response=>{
      this.router.navigateByUrl('/administrador/egresado/'+this.token.getEgresados()+'/DatosEgresados');
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
  formularios(){
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
      ingreso  :[''],
      egreso  :['', [Validators.required]],
      fecha_estado:[],
      estado:[],
      persona_id  :[],
      profesional:[]
    });
    this.EgresadoEscuelas = this.formBuild.group({
      id:  [''],
      egresado_id: [''],
      facultad_id: [''],
      escuela_id: ['']
    });
    this.PersonaForm = this.formBuild.group({
      id:  [''],
      dni: [''],
      email:[''],
      distrito:[''],
      est_civil:['', [Validators.required]],
      sexo:[''],
      validado:[''],
      user_id:[''],
      fec_nacimiento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]]
    });
  }
}
