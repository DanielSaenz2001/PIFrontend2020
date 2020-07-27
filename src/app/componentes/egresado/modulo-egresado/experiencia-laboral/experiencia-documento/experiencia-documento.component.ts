import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';

import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-experiencia-documento',
  templateUrl: './experiencia-documento.component.html',
  styleUrls: ['./experiencia-documento.component.css'],
  providers: [DatePipe]
})
export class ExperienciaDocumentoComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private formBuild: FormBuilder,
    private Token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private ExperienciaLaboralService:ExperienciaLaboralService,
    private Egresado : EgresadoService,
    private datePipe: DatePipe) { }

    ID;
  ExpForm: FormGroup;
  btnDisable;
  egresado_id;

  public estado={
    fecha_estado:null,
    estado:null
  }

  ngOnInit(): void {
    this.Validador.personaEgresado(this.Token.getAuth()).subscribe(response=>{
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
      this.ExperienciaLaboralService.update(id,this.ExpForm.value,this.Token.getEg()).subscribe(response=>{
        console.log(response)

        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/egresados/ExperienciaLaboral');
        })

      });
    }else{
      this.ExpForm.value.egresado_id=this.egresado_id;
      this.ExperienciaLaboralService.add(this.ExpForm.value,this.Token.getEg()).subscribe(response=>{

        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/egresados/ExperienciaLaboral');
        })
        
      });
    }
  }
  eliminar(){
    let fec_actual = new Date();
    let fecha = this.datePipe.transform(fec_actual, 'yyyy-MM-dd');
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.ExperienciaLaboralService.delete(id,this.Token.getEg()).subscribe(response=>{
        
        this.estado.estado=2;
        this.estado.fecha_estado=fecha;
        this.Egresado.EstadoEgresado(this.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.router.navigateByUrl('/egresados/ExperienciaLaboral');
        })

      });
    }else{
        this.router.navigateByUrl('/egresados/ExperienciaLaboral');
    }
  }

}
