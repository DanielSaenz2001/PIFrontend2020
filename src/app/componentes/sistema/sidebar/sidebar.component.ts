import { Component, OnInit } from '@angular/core';
import {ValidadoresService} from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthService } from 'src/app/guard/AuthService';
import { EgresadoService } from 'src/app/servicios/EgresadoService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  validado=true;
  list;
  ListImagen;
  ListPersona;
  rol;
  estado;
  constructor(private Validador: ValidadoresService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private _location: Location,
    private egre:EgresadoService) { }

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
      this.rol= data.ROLEID;
      console.log(data.ROLEID)
      this.Validador.personaEgresado(this.Token.getAuth()).subscribe(response=>{
      console.log(response)
      if(response.egresado == null){
        this.validado=false;
      }else{
        response.egresado.egreso
          let fecha = new Date();
          let dife = fecha.getFullYear() - response.egresado.egreso;
          console.log(dife)
          console.log(response.egresado.profesional )
        if( (response.egresado.profesional == false &&  dife >= 5)){
          console.log("debo actualziar")
          this.estado=1
          this.egre.profesional(this.Token.getEg()).subscribe()
        }else{
          this.estado=0
          console.log("soy egresado")
        }
        if( response.egresado.profesional == true){
          console.log("soy profesional")
          this.estado=1
        }
      }
      if(response.imagen==null){
        this.ListImagen= null;
      }else{
        this.ListImagen= response.imagen.imagen;
      }
      this.ListPersona= response.persona;
      
      })
      
  
    }
    back(){
      this._location.back();
    }
    handleError() {
      this.Token.removeAuth();
      this.Token.removeEgresado();
      this.Token.removeComment();
      this.Auth.changeAuthStatus(false);
      this.router.navigateByUrl('/');
    }
    logout(event: MouseEvent) {
      event.preventDefault();
      this.Token.removeAuth();
      this.Token.removeComment();
      this.Token.removeEg();
      this.Token.removeEgresado();
      this.Auth.changeAuthStatus(false);
      this.router.navigateByUrl('');
    }
    salir(){
      var r = confirm("desea salir del programa ?")
      if (r == true) {
        this.Token.removeAuth();
        this.Token.removeComment();
        this.Token.removeEg();
        this.Token.removeEgresado();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('');
      } 
    }
}
