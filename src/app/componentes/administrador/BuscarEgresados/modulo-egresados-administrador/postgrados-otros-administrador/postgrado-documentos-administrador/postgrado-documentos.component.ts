import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { PostradoOtrosService } from 'src/app/servicios/PostradoOtrosService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';

@Component({
  selector: 'app-postgrado-documentos-administrador',
  templateUrl: './postgrado-documentos.component.html',
  styleUrls: ['./postgrado-documentos.component.css']
})
export class PostgradoDocumentosAdministradorComponent implements OnInit {
  ID;
  id;
  PosgradoForm: FormGroup;
  btnDisable;
  egresado_id;

  public form={
    idusuario:''
  }

  constructor(
    private formBuild: FormBuilder,
    private token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private PostradosService:PostradoOtrosService,
    private AdministradorEgresadoService:AdministradorEgresadoService) { }

  ngOnInit(): void {
    this.id=this.token.getEgresados();
    this.form.idusuario=this.token.getUser();

    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
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
      this.PostradosService.update(id,this.PosgradoForm.value,this.token.getEg()).subscribe(response=>{
        this.router.navigateByUrl('/administrador/egresado/'+ this.token.getEgresados() +'/Postgrado-otros');
      });
    }else{
      this.PosgradoForm.value.egresado_id=this.egresado_id;
      this.PostradosService.add(this.PosgradoForm.value,this.token.getEg()).subscribe(response=>{
        
        this.router.navigateByUrl('/administrador/egresado/'+ this.token.getEgresados() +'/Postgrado-otros');
      });
    }
  }


  eliminar(){
    
    this.btnDisable=true;
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.PostradosService.delete(id,this.token.getEg()).subscribe(response=>{
        this.router.navigateByUrl('/administrador/egresado/'+ this.token.getEgresados() +'/Postgrado-otros');
      });
    }else{
        this.router.navigateByUrl('/administrador/egresado/'+ this.token.getEgresados() +'/Postgrado-otros');
    }
  }
}
