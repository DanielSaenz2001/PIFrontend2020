import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-experiencia-documento-administrador',
  templateUrl: './experiencia-documento.component.html',
  styleUrls: ['./experiencia-documento.component.css'],
  providers: [DatePipe]
})
export class ExperienciaDocumentoAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private formBuild: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ExperienciaLaboralService:ExperienciaLaboralService,
    private AdministradorEgresadoService:AdministradorEgresadoService,
    private Egresado : EgresadoService,
    private datePipe: DatePipe) { }

  public form={
    idusuario:''
  }

  public estado={
    fecha_estado:null,
    estado:null
  }

  ID;
  id;
  ExpForm: FormGroup;
  btnDisable;
  egresado_id;

  ngOnInit(): void {
    this.id=this.token.getEgresados();
    this.form.idusuario=this.token.getUser();

    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
      this.egresado_id=response.egresado.Egresado_id;
    })
    this.ExpForm = this.formBuild.group({
      id:  [''],
      empresa: ['', [Validators.required]],
      rubro_empresa: ['', [Validators.required]],
      cargo_ocupar: ['', [Validators.required]],
      area: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      final : ['', [Validators.required]],
      satisfacion: ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      evidencia: ['', [Validators.required]],
      validado : [''],
      egresado_id :[''],
    });


    let id = this.route.snapshot.paramMap.get('id');
    this.ID=id;
    if(id !== null){
        this.ExperienciaLaboralService.getById(id).subscribe(response => {
          this.ExpForm.setValue(response);
        });
    }
  }
  guardar(){
    let fec_actual = new Date();
    let fecha = this.datePipe.transform(fec_actual, 'yyyy-MM-dd');
    let id = this.route.snapshot.paramMap.get('id');
    this.btnDisable=true;
    if(id !== null){
      this.ExperienciaLaboralService.update(id,this.ExpForm.value,this.token.getEg()).subscribe(response=>{
        
        
        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/administrador/egresado/'+ this.id +'/ExperienciaLaboral');
        })

      });
    }else{
      this.ExpForm.value.egresado_id=this.egresado_id;
      this.ExperienciaLaboralService.add(this.ExpForm.value,this.token.getEg()).subscribe(response=>{
        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/administrador/egresado/'+ this.id +'/ExperienciaLaboral');
        })
      });
    }
  }
  eliminar(){
    let fec_actual = new Date();
    let fecha = this.datePipe.transform(fec_actual, 'yyyy-MM-dd');
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.ExperienciaLaboralService.delete(id,this.token.getEg()).subscribe(response=>{
        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/administrador/egresado/'+ this.id +'/ExperienciaLaboral');
        })
      });
    }else{
        this.router.navigateByUrl('/administrador/egresado/'+ this.id +'/ExperienciaLaboral');
    }
  }

}
