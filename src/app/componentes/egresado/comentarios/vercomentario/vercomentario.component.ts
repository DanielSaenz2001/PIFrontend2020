import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
@Component({
  selector: 'app-vercomentario',
  templateUrl: './vercomentario.component.html',
  styleUrls: ['./vercomentario.component.css']
})
export class VercomentarioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private ComentariosService: ComentariosService) { }
    comentarioForm: FormGroup;
    comentario
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.ComentariosService.getByIdRespuesta(id).subscribe(response => {
      this.comentario=response
      console.log(response)
    });
  }

}
