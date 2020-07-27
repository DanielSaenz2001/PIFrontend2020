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
    user;
    autorizados;
    pageActual: number = 1;
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
    this.ComentariosService.delete(id,this.Token.getComment()).subscribe(data => {
      this.ListarComentarios()
    });
  }
  ListarComentarios(){
    this.Jarwis.datos(this.Token.getAuth()).subscribe(response=>{
      this.user= response;
      this.iduser = this.user.id; 
      this.ComentariosService.getlist().subscribe(asd => {
        this.comentarios= asd;
        console.log(asd)
      });
    });
  }
  
}
