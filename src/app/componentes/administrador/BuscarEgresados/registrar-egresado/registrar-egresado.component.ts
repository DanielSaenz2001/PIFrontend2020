import { Component, OnInit } from '@angular/core';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { PersonaService } from 'src/app/servicios/PersonaService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-registrar-egresado',
  templateUrl: './registrar-egresado.component.html',
  styleUrls: ['./registrar-egresado.component.css'],
  providers: [DatePipe]
})
export class RegistrarEgresadoComponent implements OnInit {

  constructor(private EgresadoService:EgresadoService,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private PersonaService: PersonaService,
    public datepipe: DatePipe,
    private AdministradorEgresadoService:AdministradorEgresadoService) { }
  codigo;

  Sihay;
  Nohay;
  Egresado;

  public registro = {
    email: null,
    password: 123456,
    password_confirmation: 123456,
    validado:1,
    autorizado:1
  };

  public persona = {
    nombre: null,
    ap_paterno: null,
    ap_materno: null,
    distrito:null,
    dni:null,
    email: null,
    fec_nacimiento: null,
    est_civil:null,
    sexo:null,
    validado:null,
    user_id:null
  };
  public egresado = {
    codigo: null,
    celular: null,
    direccion: null,
    referencia:null,
    pais_id :null,
    departamento_id : null,
    provincia_id : null,
    distrito_id :null,
    persona_id :null,
    ingreso:null,
    estado:null,
    fecha_estado:null,
    egreso:null
  };

  public escuela = {
    egresado_id:null,
    escuela_id:null
  };
  public form={
    codigo:''
  }

  ngOnInit(): void {
   this.Sihay = false;
   this.Nohay = false;
   this.Egresado = false;
  }
  buscar(){
    this.form.codigo= this.codigo;
    this.Nohay = false;
    this.Sihay = false;
    this.Egresado = false;
    this.EgresadoService.getEgresadoCodigo(this.form).subscribe(response=>{
      console.log(response)
      if(response.egresado !== null && response.upeu == null){
        this.Sihay = "El egresado esta registrado en nuestra base de datos";
      }
      if(response.egresado == null && response.upeu !== null){
        this.Egresado = response.upeu;
        console.log(response.upeu)
      }
      if(response.egresado == null && response.upeu == null){
        this.Nohay = "El egresado esta no registrado en ninguna de nuestra base de datos";
      }
    })
  }
  agregar(data){
    console.log(data)
    this.registro.email=data.CorreoUpeu;
    this.Jarwis.signupadministrador(this.registro,this.Token.getAuth()).subscribe(usuario=>{

      let dateArray = data.FechaNacimiento.split("/");
      var FNacimiento = new Date(dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0])
      let fech_nacimiento= this.datepipe.transform(FNacimiento, 'yyyy-MM-dd')
      this.persona.nombre=data.Nombres
      this.persona.ap_paterno=data.ApellidoPaterno
      this.persona.ap_materno=data.ApellidoMaterno
      this.persona.distrito=data.DistNacimiento
      this.persona.dni=data.NDocumento
      this.persona.email=data.CorreoUpeu
      this.persona.fec_nacimiento=fech_nacimiento
      this.persona.est_civil=null
      this.persona.sexo=data.Genero
      this.persona.validado=1
      this.persona.user_id=usuario
      

      this.PersonaService.addAministrador(this.persona,this.Token.getAuth()).subscribe(persona=>{

        console.log(persona)
        
        this.egresado.codigo=data.Codigo
        this.egresado.direccion=null
        this.egresado.referencia=null
        this.egresado.pais_id=data.PaisDomicilio
        this.egresado.departamento_id=data.DepDomicilio
        this.egresado.distrito_id=data.DistDomicilio
        this.egresado.provincia_id=data.Domicilio
        this.egresado.persona_id=persona.id
        this.egresado.ingreso=null
        this.egresado.estado=0
        this.egresado.fecha_estado=null
        this.egresado.egreso=data.PeriodoEgreso

        this.AdministradorEgresadoService.addEgresadoAministrador(this.egresado, this.Token.getAuth()).subscribe(egresado=>{
          
          this.escuela.egresado_id=egresado.id
          this.escuela.escuela_id=data.EscuelaProfesional

          this.AdministradorEgresadoService.addEscuelaAministrador(this.escuela, this.Token.getAuth()).subscribe(escuela=>{
            window.location.reload();
            // this.router.navigateByUrl('/administrador/BuscarEgresado');
          })
        })
      })
    
    })
  }
}
