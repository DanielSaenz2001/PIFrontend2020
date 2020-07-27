import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/servicios/JarwisService';

@Component({
  selector: 'app-datos-egresado-administrador',
  templateUrl: './datos-egresado-administrador.component.html',
  styleUrls: ['./datos-egresado-administrador.component.css']
})
export class DatosEgresadoAdministradorComponent implements OnInit {

  constructor(private token: TokenService, private AdministradorEgresadoService:AdministradorEgresadoService,
    
    private Jarwis: JarwisService,private router: Router) { }
  id;
  edad
  ListEgresado;
  ListEscuelas;
  ListPersona;
  ListImagen;
  idusuario;
  public form={
    idusuario:''
  }
  ngOnInit(): void {
    this.idusuario=this.token.getEgresados();
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
      console.log(response)
      if(response.persona.validado == 0){
        this.router.navigateByUrl('/administrador/egresado/'+this.token.getEgresados() +'/ValidarEgresado');
      }else{
        let newDate=response.persona.fec_nacimiento+"T00:00:00"; 
        let nacimiento = new Date(newDate);
        let timeDiff = Math.abs(Date.now() - nacimiento.getTime());   
        let edad =Math.floor(timeDiff / 31556926000);
        this.edad=edad;
        this.ListPersona= response.persona;
        this.ListEscuelas= response.escuela;
        this.ListEgresado= response.egresado;
        this.ListImagen= response.imagen;
      }
    })

  }

}
