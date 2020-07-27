import { Component, OnInit } from '@angular/core';
import {ValidadoresService} from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/AuthService';
import { JarwisService } from 'src/app/servicios/JarwisService';
@Component({
  selector: 'app-modulo-egresado',
  templateUrl: './modulo-egresado.component.html',
  styleUrls: ['./modulo-egresado.component.css']
})
export class ModuloEgresadoComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService) { }
  public error = null;

  list;
  ListImagen;
  ListPersona;

  ngOnInit(): void {
    this.listar();
    
  }
  listar(){
    this.Validador.RolUsuario(this.Token.getAuth()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    if(data.autorizado == 0 || data.ROLEID !== 3 ){
      this.router.navigateByUrl('/home')
    }
    if(data.ROLEID == 3 ){
      this.Validador.personaEgresado(this.Token.getAuth()).subscribe(response=>{
      if(response.imagen==null){
        this.ListImagen= null;
      }else{
        this.ListImagen= response.imagen.imagen;
      }
    this.ListPersona= response.persona;
    })
    }
    
  }
    handleError() {
    this.Token.removeAuth();
    this.Token.removeEgresado();
    this.Token.removeComment();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }

}
