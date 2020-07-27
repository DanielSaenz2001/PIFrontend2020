import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
import { TokenService } from 'src/app/servicios/TokenService';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuild: FormBuilder,
    private ComentariosService: ComentariosService,
    private token: TokenService) { }
    comentarioForm: FormGroup;
    comentario

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.ComentariosService.getByIdRespuesta(id).subscribe(response => {
      this.comentario=response
    });
    this.comentarioForm = this.formBuild.group({
      descripcionAdministrador:['', [Validators.required]]
    });
  }
  SubmitComentario() {
    let id = this.route.snapshot.paramMap.get('id');
    if( id !== null &&  id !== undefined){
      this.ComentariosService.ComentariosUpdateRespuesta( id, this.comentarioForm.value,this.token.getComment()).subscribe(response => {
        this.router.navigateByUrl('/administrador/GestionarComentarios');
      });
    }
  }
  
}
