import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private ComentariosService: ComentariosService,
    private token: TokenService) { }
    comentarios;
    iduser;
  ngOnInit(): void {
    this.ListarComentarios();
  }

  EliminarComentario(id){
    this.ComentariosService.delete(id).subscribe(response => {
      this.ListarComentarios()
    });
  }
  ListarComentarios(){
    this.iduser = this.token.getUser();
    this.ComentariosService.getlist().subscribe(response => {
      this.comentarios= response;
    });
  }

}
