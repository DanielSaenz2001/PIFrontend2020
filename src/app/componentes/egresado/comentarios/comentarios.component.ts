import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/servicios/ComentariosService';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(
    private ComentariosService: ComentariosService,
    private Token: TokenService,
    private Jarwis: JarwisService) { }
    comentarios;
    iduser;
    autorizados;
    auto;
  ngOnInit(): void {
    this.usuario();
    this.ListarComentarios();
  }
  usuario(){
    this.Jarwis.datos(this.Token.getAuth()).subscribe(response=>{
      
     this.auto = response;
     this.autorizados = this.auto.autorizado;
    });
  }
  EliminarComentario(id){
    this.ComentariosService.delete(id).subscribe(data => {
      this.ListarComentarios()
    });
  }
  ListarComentarios(){
    this.iduser = this.Token.getUser();
    this.ComentariosService.getlist().subscribe(asd => {
      this.comentarios= asd;
    });
  }
  
}
