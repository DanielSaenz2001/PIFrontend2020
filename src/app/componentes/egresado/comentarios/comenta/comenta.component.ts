import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
import { TokenService } from 'src/app/servicios/TokenService';
import { DatePipe } from '@angular/common';
import { JarwisService } from 'src/app/servicios/JarwisService';

@Component({
  selector: 'app-comenta',
  templateUrl: './comenta.component.html',
  styleUrls: ['./comenta.component.css'],
  providers: [DatePipe]
})
export class ComentaComponent implements OnInit {
  comentarioForm: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private ComentariosService: ComentariosService,
    private token: TokenService, private datePipe: DatePipe,
    private Jarwis: JarwisService) { }
    comment;
    btnDisable;
  ngOnInit(): void {
    this.listar();
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if( id !== null && id !== undefined){
        this.ComentariosService.getById(id).subscribe(response => {
          this.comentarioForm.setValue(response);
        
      });
    }
    this.comentarioForm = this.formBuild.group({
      id:  [''],
      descripcionEgresado: ['', [Validators.required]],
      fecha_creacion: [],
      tipo: ['', [Validators.required]],
      opcional: ['', [Validators.required]],
      user_id: [],
      descripcionAdministrador: [],
      respuesta: []
    });
  }
 
  SubmitComentario() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.btnDisable=true;
    if( id == null && id == undefined){
      let myDate = new Date();
      let fecha = this.datePipe.transform(myDate, 'yyyy-MM-dd');
      this.comentarioForm.value.user_id = this.token.getUser();
      this.comentarioForm.value.fecha_creacion =fecha;
      this.ComentariosService.add(this.comentarioForm.value,this.token.getComment()).subscribe(response => {
        this.router.navigateByUrl('/comentarios');
      });
    }else{
      this.ComentariosService.update(id,this.comentarioForm.value,this.token.getComment()).subscribe(response => {
        this.router.navigateByUrl('/comentarios');
      });
    }

    
  }
  borrar(){
    this.comentarioForm.reset()
  }
  listar(){
    this.Jarwis.datos(this.token.getAuth()).subscribe(response=>{
      this.comment=response;
     if(this.comment.autorizado == 0){
        this.router.navigateByUrl('/home');
     };
    });
  }
}
