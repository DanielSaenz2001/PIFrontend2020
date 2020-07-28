import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
import { TokenService } from 'src/app/servicios/TokenService';
@Component({
  selector: 'app-gestion-comentarios',
  templateUrl: './gestion-comentarios.component.html',
  styleUrls: ['./gestion-comentarios.component.css']
})
export class GestionComentariosComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private token: TokenService,
    private ComentariosService: ComentariosService) { }

    comentarios;
    pageActual: number = 1;
  ngOnInit(): void {
    this.ListarComentarios();
  }
  EliminarComentario(id){
    this.ComentariosService.delete(id,this.token.getComment()).subscribe(response => {
      this.ListarComentarios()
    });
  }
  ListarComentarios(){
    this.ComentariosService.getlistComentariosNoRespuesta().subscribe(response => {
      console.log(response)
      this.comentarios= response;
    });
  }
}
