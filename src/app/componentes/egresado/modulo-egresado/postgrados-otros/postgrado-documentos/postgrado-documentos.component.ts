import { Component, OnInit, Input  } from '@angular/core';
import { PostradoOtrosService } from 'src/app/servicios/PostradoOtrosService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { ValidadoresService } from 'src/app/servicios/validadores.service';

@Component({
  selector: 'app-postgrado-documentos',
  templateUrl: './postgrado-documentos.component.html',
  styleUrls: ['./postgrado-documentos.component.css']
})
export class PostgradoDocumentosComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private formBuild: FormBuilder,
    private Token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private PostradosService:PostradoOtrosService) { }

    ID;
  PosgradoForm: FormGroup;
  btnDisable;
  egresado_id;

  ngOnInit(): void {
    this.Validador.personaEgresado(this.Token.getAuth()).subscribe(response=>{
      this.egresado_id=response.egresado.Egresado_id;
    })
    this.PosgradoForm = this.formBuild.group({
      id:  [''],
      agrado_academico: ['', [Validators.required]],
      entidad: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
      evidencias : ['', [Validators.required]],
      egresado_id :[''],
    });


    let id = this.route.snapshot.paramMap.get('id');
    this.ID=id;
    if(id !== null){
        this.PostradosService.getById(id).subscribe(response => {
          this.PosgradoForm.setValue(response);
        });
    }
    
  }
  guardar(){
    let id = this.route.snapshot.paramMap.get('id');
    this.btnDisable=true;
    if(id !== null){
      this.PostradosService.update(id,this.PosgradoForm.value,this.Token.getEg()).subscribe(response=>{
        console.log(response)
        this.router.navigateByUrl('/egresados/Postgrado-otros');
      });
    }else{
      this.PosgradoForm.value.egresado_id=this.egresado_id;
      this.PostradosService.add(this.PosgradoForm.value,this.Token.getEg()).subscribe(response=>{
        this.router.navigateByUrl('/egresados/Postgrado-otros');
      });
    }
  }
  eliminar(){
    this.btnDisable=true;
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.PostradosService.delete(id,this.Token.getEg()).subscribe(response=>{
        this.router.navigateByUrl('/egresados/Postgrado-otros');
      });
    }else{
        this.router.navigateByUrl('/egresados/Postgrado-otros');
    }
  }
}
