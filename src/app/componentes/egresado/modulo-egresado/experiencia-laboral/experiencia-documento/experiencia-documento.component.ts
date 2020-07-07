import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';

@Component({
  selector: 'app-experiencia-documento',
  templateUrl: './experiencia-documento.component.html',
  styleUrls: ['./experiencia-documento.component.css']
})
export class ExperienciaDocumentoComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private formBuild: FormBuilder,
    private Token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private ExperienciaLaboralService:ExperienciaLaboralService) { }

    ID;
  ExpForm: FormGroup;
  btnDisable;
  egresado_id;

  ngOnInit(): void {
    this.Validador.personaEgresado(this.Token.get()).subscribe(response=>{
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
    let id = this.route.snapshot.paramMap.get('id');
    this.btnDisable=true;
    if(id !== null){
      this.ExperienciaLaboralService.update(id,this.ExpForm.value).subscribe(response=>{
        this.router.navigateByUrl('/egresados/ExperienciaLaboral');
      });
    }else{
      this.ExpForm.value.egresado_id=this.egresado_id;
      this.ExperienciaLaboralService.add(this.ExpForm.value).subscribe(response=>{
        this.router.navigateByUrl('/egresados/ExperienciaLaboral');
      });
    }
  }
  eliminar(){
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.ExperienciaLaboralService.delete(id).subscribe(response=>{
        this.router.navigateByUrl('/egresados/ExperienciaLaboral');
      });
    }else{
        this.router.navigateByUrl('/egresados/ExperienciaLaboral');
    }
  }

}
